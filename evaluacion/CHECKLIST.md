# Checklist de entrega

Usá esto antes de abrir (o reabrir) el PR.

## Estructura

- [ ] Todo vive en `entregas/<tu-usuario-github>/`
- [ ] Existen `README.md`, `SPEC.md`, `AI.md`
- [ ] Hay código de la API y carpeta/suite de tests

## Spec y proceso

- [ ] `SPEC.md` reescribe las reglas (no solo copy-paste)
- [ ] Auth documentada en `SPEC.md` y `README.md` (p. ej. `X-User-Id` o auth real + cómo testearla)
- [ ] Códigos HTTP elegidos y consistentes: reserva ajena (403 **o** 404); slot inexistente/ocupado (409 **o** 400)
- [ ] Fuera de alcance explícito
- [ ] `AI.md` nombra herramientas, al menos un rechazo o incidente, y verificación

## Comportamiento (CA)

- [ ] CA1 — listado sin pasados ni ocupados
- [ ] CA2 — reserva ocupa slot y cuenta cupo
- [ ] CA3 — cuarto intento activo falla (4xx)
- [ ] CA4 — doble booking: uno gana, otro falla
- [ ] CA5 — ventana de cancelación 24 h
- [ ] CA6 — tras cancelar a tiempo, otro usuario puede tomar el slot
- [ ] Tests automatizados cubren esos comportamientos (CA7)

## Verificación local

- [ ] README permite instalar y testear en menos de 10 minutos (y server local **o** URL desplegada)
- [ ] Comando de test documentado y en verde en checkout limpio
- [ ] Sin secretos en el repo
- [ ] No tocaste `CONSIGNA.md`, `RUBRICA.md` ni `evaluacion/`

## PR

- [ ] Branch `entrega/<tu-usuario>` en **este** repo (sin fork)
- [ ] PR hacia `main`
- [ ] Descripción con usuario GitHub + comando de test
