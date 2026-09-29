# SPEC.md — Reservas de turnos (ejemplo)

## Decisión de auth
Header `X-User-Id`. En tests se pasa como string en las funciones de dominio.

## Códigos HTTP elegidos
- Slot ocupado: 409
- Reserva ajena: 403
- Validación (pasado, cupo, ventana de cancelación): 400

## Reglas (reescritas, verificables)
1. Un slot libre = una sola reserva activa.
2. Máximo 3 reservas activas por usuario.
3. No reservar slots en el pasado.
4. Cancelación solo hasta 24 h antes (pendiente de implementar bien en este ejemplo).
5. Cancelar libera el slot.

## Fuera de alcance (además de lo dado)
- API HTTP, UI, pagos, multi-consultorio.

## Cómo se prueba
Comando: `npm test`
Casos que cubren CA1–CA6: solo CA2 y CA3 parcialmente en esta entrega de ejemplo.
