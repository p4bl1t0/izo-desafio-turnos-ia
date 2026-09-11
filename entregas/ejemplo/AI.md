# AI.md

## Herramientas
- Cursor Agent — armar entrega de ejemplo para probar la Automation

## Proceso
1. Preguntas que le hice a la spec antes de codear: ninguna (es un stub de prueba).
2. Plan que aprobé (resumen): carpeta mínima con dominio in-memory + 2 tests.
3. Tareas delegadas al agente: scaffold de la entrega ejemplo.
4. Diffs o ideas que rechacé (y por qué): no implementar API HTTP completa para no alargar la prueba.
5. Tests que el agente no escribió y agregué yo (o al revés): solo happy path de cupo.

## Incidentes
- Alucinación o error grave: N/A (stub).
- Cómo lo detecté: N/A.

## Verificación final
- Comandos corridos: `npm test` (esperado: verde en los 2 tests parciales).
- Qué queda sin cubrir: CA1 listado, CA4 conflicto, CA5 ventana 24 h, CA6 post-cancelación, API HTTP.
