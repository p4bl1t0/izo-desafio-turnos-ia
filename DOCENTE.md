# Notas para el docente

## Alineación con el workshop presencial

- En clase hay una **dinámica sin PC** (≈12 min de la actividad de gastos): duplas redactan las 8 partes de un requerimiento en papel antes de abrir el laptop.
- El desafío asíncrono asume esa misma tesis: el alumno **decide** en `SPEC.md`; el agente **ejecuta**. La spec dada manda.

## Repo

- Este repo es solo entregas + consignas.
- Alumnos = collaborators (o Classroom mismo repo). **Sin forks** (Automations de Cursor no los soporta).

## Automation de Cursor

- Nombre sugerido: `Evaluador desafío turnos`
- Triggers: PR abierto (no draft) + comentario en PR
- Herramienta: comentar en el PR
- Instrucciones: contenido de `evaluacion/PROMPT-EVALUADOR.md` (el agente debe leer ese archivo + `CONSIGNA.md` + `RUBRICA.md`)
- Re-evaluación: el alumno comenta `/evaluar` en el PR

## Flujo de corrección humana

1. Leer el comentario del agente.
2. Si la confianza es baja o el entorno no corrió, rehacer CAs críticos a mano (cupo, conflicto, 24 h).
3. Ajustar nota final con `RUBRICA.md`.
4. Responder en el PR con la nota confirmada (opcional: etiqueta `evaluado`).

## Privacidad de tests

Los tests “privados” del docente pueden vivir fuera de este repo o en una branch no compartida. El agente puede generar checks temporales en el sandbox; no hace falta publicarlos antes de la entrega.
