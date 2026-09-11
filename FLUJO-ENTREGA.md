# Flujo de entrega (alumnos)

> **Importante:** no uses *fork*. Abrí el PR desde una **branch de este mismo repo**. Las automatizaciones de Cursor no corren sobre PRs desde forks.

## 1. Acceso

El docente te agrega como collaborator (o vía GitHub Classroom en modo mismo repo). Confirmá que ves [p4bl1t0/izo-desafio-turnos-ia](https://github.com/p4bl1t0/izo-desafio-turnos-ia).

## 2. Clonar y branch

```bash
git clone https://github.com/p4bl1t0/izo-desafio-turnos-ia.git
cd izo-desafio-turnos-ia
git checkout -b entrega/<tu-usuario-github>
```

Ejemplo: usuario `mgarcia` → branch `entrega/mgarcia`.

## 3. Carpeta de entrega

```bash
mkdir -p entregas/<tu-usuario-github>
cp plantillas/SPEC.md entregas/<tu-usuario-github>/SPEC.md
cp plantillas/AI.md entregas/<tu-usuario-github>/AI.md
```

Trabajá **solo** dentro de `entregas/<tu-usuario-github>/`. No modifiques `CONSIGNA.md`, `RUBRICA.md`, `evaluacion/` ni otras entregas.

Estructura mínima (esto **es** el entregable; ver detalle en `CONSIGNA.md`):

```text
entregas/<tu-usuario-github>/
├── src/          # o la convención de tu stack
├── tests/
├── README.md     # instalar / testear / (server o URL) en < 10 min
├── SPEC.md       # decisiones + reglas reescritas
└── AI.md         # bitácora del proceso con IA
```

## 4. Implementar y verificar

1. Reescribí reglas y decisiones en `SPEC.md` (auth, códigos HTTP 403/404 y 409/400).
2. Implementá la API + tests que cubran CA1–CA6.
3. Documentá el proceso con IA en `AI.md` (durante el trabajo, no al final).
4. En un checkout limpio de tu carpeta: instalar → `npm test` / equivalente → verde.
5. README: pasos de install/test; si no hay server local, URL hospedada (Vercel/Render/etc. sirven).

## 5. Abrir el PR

```bash
git add entregas/<tu-usuario-github>
git commit -m "entrega: desafío turnos"
git push -u origin entrega/<tu-usuario-github>
```

En GitHub:

1. Abrí un **Pull Request** hacia `main`.
2. Título sugerido: `Entrega: <tu-nombre> — desafío turnos`.
3. En la descripción: tu usuario de GitHub, el comando de test y, si aplica, la URL de demo.
4. **No** marques draft si querés evaluación automática al abrir; o abrí draft mientras trabajás y, al terminar, publicá el PR / pedí re-evaluación con un comentario.

## 6. Evaluación automática

Al abrir el PR (no draft), un agente de Cursor deja un **comentario con la devolución** según la rúbrica.

Para pedir otra pasada (después de correcciones), comentá en el PR exactamente:

```text
/evaluar
```

La nota automática es **orientativa**. El docente confirma la calificación final.

## 7. Qué no hacer

- Fork + PR desde el fork
- Entregar en la raíz del repo o fuera de `entregas/<tu-usuario>/`
- Commitear `.env` con secretos
- Borrar o editar la consignas/rúbrica del docente
- Abrir varios PRs de la misma persona sin cerrar el anterior (preferí un PR y pushes)
