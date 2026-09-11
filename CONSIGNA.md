# Desafío Final — Del requerimiento al software

**Reservas de turnos, de la spec al sistema validado**

Actividad asincrónica (unas **4–6 horas** a lo largo de una semana). Usá libremente herramientas de IA y agentes para transformar la especificación dada en software ejecutable, testeado y documentado.

## Objetivo

Evaluar si podés **dirigir un proceso con IA** — especificar, contextualizar, planificar, implementar, testear y registrar decisiones — no si programás sin IA. Usar IA es **obligatorio** y se documenta en `AI.md`.

## Escenario

Un consultorio chico quiere un MVP para que pacientes autenticados reserven turnos sobre una agenda de slots. No hace falta UI sofisticada: alcanza una API (UI mínima opcional). El producto se define por las **reglas de negocio**, no por el framework.

## Spec dada (manda sobre tu SPEC.md si hay contradicción)

### Producto

API de reserva de turnos para un único consultorio.

### Actores

- Paciente autenticado (en el MVP puede ser un `userId` simulado por header `X-User-Id` si no implementás auth real; debe quedar documentado).
- No hay rol admin en el MVP, salvo un seed de slots.

### En alcance

- Listar slots disponibles (futuros y libres).
- Reservar un slot libre.
- Listar las reservas del usuario actual.
- Cancelar una reserva propia.

### Fuera de alcance

- Pagos, recordatorios, videollamada, multi-profesional, overbooking comercial, app móvil.

### Reglas de negocio (obligatorias)

1. Un slot no puede tener más de una reserva activa.
2. Un usuario no puede tener más de **3** reservas activas (futuras y no canceladas).
3. No se puede reservar un slot en el pasado.
4. Cancelación permitida solo hasta **24 horas** antes del inicio del slot.
5. Cancelar un slot lo vuelve a dejar disponible.
6. Operaciones sobre reservas ajenas: **403 o 404** (elegí uno y sé consistente).
7. Slot inexistente o ya ocupado: **409 o 400** (elegí uno y sé consistente).

### Criterios de aceptación (el evaluador los va a intentar romper)

- **CA1:** listar disponibles no incluye pasados ni ocupados.
- **CA2:** reservar un slot libre lo marca ocupado y cuenta para el cupo del usuario.
- **CA3:** un cuarto intento de reserva activa del mismo usuario falla.
- **CA4:** dos reservas sobre el mismo slot: una gana, la otra falla (aunque sea secuencial en tests).
- **CA5:** cancelar 24 h 1 min antes del slot está permitido; 23 h 59 min antes, no.
- **CA6:** tras cancelar a tiempo, otro usuario puede tomar el slot.
- **CA7:** hay tests automatizados que cubren CA1–CA6 (no hace falta un test por CA si uno cubre varios, pero los seis comportamientos tienen que fallar si se rompen).

### Restricciones técnicas

- Stack libre, pero `README.md` tiene que permitir instalar, testear y (si aplica) levantar el servidor en menos de 10 minutos.
- Debe existir `npm test`, `pnpm test`, `pytest` o equivalente documentado.
- Sin secretos reales. Sin llamar APIs pagas en los tests.

## Restricciones del desafío

1. Usar al menos una herramienta de IA o agente y documentarlo. Entregar código “como si no hubiera IA” con `AI.md` incompleto **no cumple**.
2. No se evalúa originalidad del stack. Se evalúa cumplimiento de reglas, tests y honestidad del proceso.
3. Podés partir de cero. No hay starter obligatorio de código.
4. Si usás header `X-User-Id` en lugar de auth real, decilo en `README.md` y `SPEC.md`.

## Entregables dentro de tu carpeta

```text
entregas/<tu-usuario-github>/
├── src/          # o equivalente del stack
├── tests/
├── README.md
├── SPEC.md
└── AI.md
```

Plantillas: `plantillas/SPEC.md` y `plantillas/AI.md`.

## Cómo entregar

Seguí [FLUJO-ENTREGA.md](./FLUJO-ENTREGA.md). Resumen: branch `entrega/<tu-usuario>` → carpeta `entregas/<tu-usuario>/` → PR a `main` (sin fork).

## Evaluación

- Rúbrica: [RUBRICA.md](./RUBRICA.md)
- Checklist: [evaluacion/CHECKLIST.md](./evaluacion/CHECKLIST.md)
- Un agente de Cursor comenta en el PR una devolución automática. La nota final la confirma el docente.
