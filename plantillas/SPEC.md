# SPEC.md — Reservas de turnos

> Completá **todas** las secciones. Esto no es copy-paste de la consigna: son **tus decisiones** + reglas reescritas de forma verificable.
> Momento: antes/durante la implementación. “Listo” = coincide con los tests y no contradice la spec dada.
> Guía completa: `CONSIGNA.md` → “Cómo usar SPEC.md y AI.md”.

## Decisión de auth

(Ej. `X-User-Id` / sesión / JWT).

- Mecanismo elegido:
- Cómo se identifica al usuario en los tests (header, cookie, token de prueba…):
- Si falta autenticación, ¿qué responde la API? (código HTTP):

## Códigos HTTP elegidos

> Elegí **un** código por fila y usalo siempre igual en la API y en los tests.

- Operación sobre reserva ajena (**403** o **404**):
- Slot inexistente o ya ocupado (**409** o **400**):
- Validación (pasado, cupo, ventana de cancelación) — indicá el/los códigos que uses:

## Reglas (reescritas, verificables)

1.
2.
3.
4.
5.
6.
7.

## Fuera de alcance (además de lo dado)

-

## Cómo se prueba

- Comando:
- Casos que cubren CA1–CA6:
