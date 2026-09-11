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

- **Paciente autenticado.** En el MVP **no es obligatorio** implementar login real (JWT, sesión, OAuth, etc.).
  - Opción válida y recomendada: simular al usuario con el header HTTP `X-User-Id` (string). Quien envía el request “es” ese paciente.
  - Comportamiento esperado con `X-User-Id`:
    - Si falta el header → rechazar (típicamente **401**).
    - Listar / cancelar reservas opera **solo** sobre las del `userId` del header.
    - Reservar asocia el slot a ese `userId`.
    - Los tests deben enviar el header (o el mecanismo que elijas) de forma explícita.
  - Si preferís auth real, también vale: documentá el flujo y cómo lo ejercitan los tests.
  - **Obligatorio documentar la elección** en `README.md` (cómo autenticarse / qué header mandar) y en `SPEC.md` (sección “Decisión de auth”).
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
6. Operaciones sobre reservas ajenas → **código HTTP** **403** o **404** (elegí **uno** de los dos y usalo siempre igual; documentalo en `SPEC.md`).
7. Slot inexistente o ya ocupado → **código HTTP** **409** o **400** (elegí **uno** de los dos y usalo siempre igual; documentalo en `SPEC.md`).

> Los ítems 6 y 7 son **status codes HTTP** de la API (no mensajes sueltos ni excepciones sin mapear). La consistencia cuenta: el evaluador compara respuesta real vs. lo que diga tu `SPEC.md`.

### Criterios de aceptación (el evaluador los va a intentar romper)

- **CA1:** listar disponibles no incluye pasados ni ocupados.
- **CA2:** reservar un slot libre lo marca ocupado y cuenta para el cupo del usuario.
- **CA3:** un cuarto intento de reserva activa del mismo usuario falla.
- **CA4:** dos reservas sobre el mismo slot: una gana, la otra falla (aunque sea secuencial en tests).
- **CA5:** cancelar 24 h 1 min antes del slot está permitido; 23 h 59 min antes, no.
- **CA6:** tras cancelar a tiempo, otro usuario puede tomar el slot.
- **CA7:** hay tests automatizados que cubren CA1–CA6 (no hace falta un test por CA si uno cubre varios, pero los seis comportamientos tienen que fallar si se rompen).

### Restricciones técnicas

- **Stack libre.** Podés usar el lenguaje/framework que quieras.
- Tu `README.md` tiene que permitir, en **menos de 10 minutos** y sin magia oral:
  1. instalar dependencias,
  2. correr los tests,
  3. (si aplica) levantar el servidor local **o** indicar una URL ya desplegada.
- Debe existir `npm test`, `pnpm test`, `pytest` o equivalente **documentado** en el README.
- Si hospedás la API, opciones simples: **Vercel**, **Render**, u otro PaaS equivalente. Dejá la URL en el README (y en la descripción del PR si querés). El hosting **no reemplaza** los tests locales/automatizados.
- Sin secretos reales. Sin llamar APIs pagas en los tests.

## Cómo usar `SPEC.md` y `AI.md`

Estos dos archivos son **parte del entregable**, no un apéndice opcional. Partí de las plantillas en `plantillas/`.

### `SPEC.md` — tu interpretación operativa

| Qué | Detalle |
|-----|---------|
| **Para qué** | Dejar por escrito las **decisiones** que la spec dada deja abiertas (auth, códigos HTTP) y reescribir las reglas de forma verificable. |
| **Qué va acá** | Auth elegida; códigos HTTP (ajena / slot ocupado o inexistente / validaciones); reglas 1–7 en tus palabras; fuera de alcance extra; comando de test y mapa CA → casos. |
| **Qué no va** | Bitácora de prompts, historial con el agente, ni el código. Eso es `AI.md`. |
| **Cuándo** | Completalo **antes o mientras** implementás (no al final como relleno). Las decisiones de HTTP/auth conviene fijarlas temprano. |
| **“Listo”** | Alguien ajeno podría implementar solo con tu `SPEC.md` + la spec dada; lo documentado coincide con lo que hacen los tests; **no contradice** la spec dada (si hay choque, gana la spec dada). |

### `AI.md` — bitácora del proceso con IA

| Qué | Detalle |
|-----|---------|
| **Para qué** | Demostrar que **dirigiste** el proceso: herramientas, delegación, rechazos, verificación. |
| **Qué va acá** | Herramientas por etapa; preguntas a la spec; plan aprobado; qué delegaste; diffs/ideas que cortaste; tests que agregaste vos (o el agente); incidentes y cómo los detectaste; comandos finales en verde. |
| **Qué no va** | Reescritura de las reglas de negocio ni contratos HTTP (eso es `SPEC.md`). |
| **Cuándo** | Andá llenándolo **durante** el trabajo (no una línea el día de la entrega). |
| **“Listo”** | Se puede **reconstruir** qué hiciste con IA; hay al menos un rechazo o incidente real; figura el comando de verificación final. Entregar código “como si no hubiera IA” con `AI.md` incompleto **no cumple**. |

## Restricciones del desafío

1. Usar al menos una herramienta de IA o agente y documentarlo. Entregar código “como si no hubiera IA” con `AI.md` incompleto **no cumple**.
2. No se evalúa originalidad del stack. Se evalúa cumplimiento de reglas, tests y honestidad del proceso.
3. Podés partir de cero. No hay starter obligatorio de código.
4. Si usás header `X-User-Id` en lugar de auth real, decilo en `README.md` y `SPEC.md`. Inventar un JWT a medias sin tests de auth no suma.

## Qué es el entregable

El **entregable** es un **Pull Request** a este repo (sin fork) con tu carpeta completa. No alcanza con “el código en algún lado”: tiene que ser revisable y ejecutable desde el PR.

Incluye **obligatoriamente**:

| Pieza | Significa “hecho” cuando… |
|-------|---------------------------|
| Código (`src/` o equivalente) | API que cumple el alcance y las reglas. |
| `tests/` | Suite automatizada que cubre CA1–CA6 (CA7). |
| `README.md` | Install + test (+ server o URL) en menos de 10 min; auth/`X-User-Id` explicado. |
| `SPEC.md` | Decisiones + reglas reescritas (ver arriba). |
| `AI.md` | Proceso con IA reconstruible (ver arriba). |

**Opcional pero útil:** URL de demo si está hospedada (Vercel/Render/etc.) en el README y/o en la descripción del PR.

**No es entregable por sí solo:** un zip suelto, un gist, o un repo externo sin el PR en este repositorio (salvo que el docente indique otra vía).

Estructura dentro de tu carpeta:

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
