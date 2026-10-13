# Checklist de entrega

Usá esto antes de abrir (o reabrir) el PR.

## Estructura

- [ ] Todo vive en `entregas/<tu-usuario-github>/`
- [ ] Existen `README.md`, `SPEC.md`, `AI.md`
- [ ] Hay código de la API y carpeta/suite de tests

## Spec y proceso

- [ ] `SPEC.md` reescribe las reglas (no solo copy-paste)
- [ ] Auth documentada en `SPEC.md` y `README.md` (p. ej. `X-User-Id` o auth real + cómo testearla)
- [ ] Endpoint de reprogramar y códigos HTTP elegidos y consistentes: reserva ajena (403 **o** 404); slot destino inexistente/ocupado (409 **o** 400)
- [ ] Fuera de alcance explícito (incl. cancelar sin reprogramar)
- [ ] `AI.md` nombra herramientas, al menos un rechazo o incidente, y verificación

## Comportamiento (CA)

- [ ] CA1 — listado sin pasados ni ocupados
- [ ] CA2 — solicitar ocupa slot y cuenta cupo
- [ ] CA3 — cuarto intento activo falla (4xx)
- [ ] CA4 — reprogramar a slot libre: libera el viejo y ocupa el nuevo
- [ ] CA5 — ventana de reprogramación 24 h
- [ ] CA6 — destino ocupado/pasado falla; tras OK, otro toma el slot liberado
- [ ] Tests automatizados cubren esos comportamientos (CA7)

## Verificación local

- [ ] README permite instalar y testear en menos de 10 minutos (y server local **o** URL desplegada)
- [ ] Comando de test documentado y en verde en checkout limpio
- [ ] Evidencia en `AI.md` (comando + resultado; no alcanza “el agente dijo listo”)
- [ ] Sin secretos en el repo
- [ ] No tocaste `CONSIGNA.md`, `RUBRICA.md` ni `evaluacion/`

## PR

- [ ] Branch `entrega/<tu-usuario>` en **este** repo (sin fork)
- [ ] PR hacia `main`
- [ ] Descripción con usuario GitHub + comando de test
