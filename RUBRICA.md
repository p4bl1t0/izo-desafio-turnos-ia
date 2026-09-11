# Rúbrica — Desafío turnos (100 puntos)

La **spec dada** en `CONSIGNA.md` manda si contradice el `SPEC.md` del alumno.

| Criterio | Puntos | Insuficiente | Suficiente | Excelente |
|----------|--------|--------------|------------|-----------|
| **Cumplimiento funcional** | 40 | No corre, o fallan 3+ reglas (CA1–CA6). | Reglas principales OK; 1 borde flojo (p. ej. 24 h aproximada). | CA1–CA6 aguantan intento de romper. HTTP consistente con lo documentado. |
| **Casos borde** | 15 | Solo happy path. Cuarto POST o doble booking pasan. | Cupo o conflicto cubiertos; falta un borde de tiempo. | Bordes cubiertos; fallan con 4xx, no 500 genérico. |
| **Tests** | 15 | Sin comando, no corre, o no cubre reglas. | Suite verde del núcleo; algunos CA implícitos. | Checkout limpio verde; se ve qué CA cubre cada caso. |
| **Calidad del código** | 10 | Inentendible, secretos, o monolito sin recorte. | Flujo reserva/cancelar seguible; algo de ruido de agente. | Diff revisable; fuera de alcance respetado. |
| **Arquitectura** | 10 | Todo en un archivo, o tres frameworks a la vez. | Estructura reconocible; persistencia explícita. | Límites claros; fácil agregar un CA nuevo. |
| **Documentación y proceso** | 5 | README vacío o AI.md de una línea. | Instalable/testeable; AI.md nombra herramientas y un incidente. | README de 10 min; AI.md con plan, rechazos y comando final verde. |
| **Especificación** | 5 | Copy-paste sin decisiones, o contradice la spec dada. | Reglas reescritas; auth/HTTP decididos; fuera de alcance. | Decisiones trazables a tests; alguien ajeno podría implementar solo con SPEC.md. |

**Total: 100**

## Evidencia esperada

Cada recorte de puntaje debe citar evidencia: comando, status HTTP, nombre de test o fragmento de archivo. Ejemplo:

```text
Criterio: Máximo 3 reservas activas (CA3).
Resultado: INCUMPLIDO.
Evidencia: El cuarto POST del mismo X-User-Id devuelve 201.
Esperado: HTTP 4xx | Obtenido: HTTP 201
```
