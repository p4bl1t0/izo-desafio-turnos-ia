import { describe, expect, it, beforeEach } from 'vitest'
import {
  resetStore,
  createAppointment,
  listAvailableSlots,
} from '../src/appointments.js'

const future = (hoursFromNow) =>
  new Date(Date.now() + hoursFromNow * 60 * 60 * 1000).toISOString()

describe('appointments (entrega ejemplo parcial)', () => {
  beforeEach(() => {
    resetStore([
      { id: 'slot-1', startsAt: future(48) },
      { id: 'slot-2', startsAt: future(72) },
      { id: 'slot-3', startsAt: future(96) },
      { id: 'slot-4', startsAt: future(120) },
    ])
  })

  it('CA2: reservar marca el slot ocupado', () => {
    const res = createAppointment('user-1', 'slot-1')
    expect(res.status).toBe(201)
    const available = listAvailableSlots().map((s) => s.id)
    expect(available).not.toContain('slot-1')
  })

  it('CA3: el cuarto intento activo falla', () => {
    expect(createAppointment('user-1', 'slot-1').status).toBe(201)
    expect(createAppointment('user-1', 'slot-2').status).toBe(201)
    expect(createAppointment('user-1', 'slot-3').status).toBe(201)
    expect(createAppointment('user-1', 'slot-4').status).toBe(400)
  })
})
