const slots = new Map()
const appointments = []

export function resetStore(seedSlots = []) {
  slots.clear()
  appointments.length = 0
  for (const slot of seedSlots) {
    slots.set(slot.id, { ...slot, taken: false })
  }
}

export function listAvailableSlots(now = new Date()) {
  return [...slots.values()].filter((s) => !s.taken && new Date(s.startsAt) > now)
}

export function createAppointment(userId, slotId, now = new Date()) {
  const slot = slots.get(slotId)
  if (!slot) return { ok: false, status: 404, error: 'slot not found' }
  if (new Date(slot.startsAt) <= now) return { ok: false, status: 400, error: 'slot in the past' }
  if (slot.taken) return { ok: false, status: 409, error: 'slot taken' }

  const active = appointments.filter((a) => a.userId === userId && a.status === 'active')
  if (active.length >= 3) return { ok: false, status: 400, error: 'max 3 active appointments' }

  slot.taken = true
  const appointment = {
    id: `appt-${appointments.length + 1}`,
    userId,
    slotId,
    status: 'active',
  }
  appointments.push(appointment)
  return { ok: true, status: 201, appointment }
}

export function cancelAppointment(userId, appointmentId, now = new Date()) {
  const appointment = appointments.find((a) => a.id === appointmentId)
  if (!appointment || appointment.status !== 'active') {
    return { ok: false, status: 404, error: 'appointment not found' }
  }
  if (appointment.userId !== userId) {
    return { ok: false, status: 403, error: 'forbidden' }
  }

  const slot = slots.get(appointment.slotId)
  // BUG intencional para la demo: no valida ventana de 24 h
  appointment.status = 'cancelled'
  if (slot) slot.taken = false
  return { ok: true, status: 200, appointment }
}
