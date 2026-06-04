# Informe de Análisis Técnico

## Mecanismo de Hoisting
La declaración `var` se eleva al inicio de su ámbito y se inicializa como `undefined`. Esto es peligroso porque permite usar variables antes de tiempo, causando errores lógicos. Se recomienda usar `let` y `const`.

## Coerción de Tipos
La expresión `[] == ![]` resulta en `true`. Esto ocurre porque `![]` se convierte en `false` (0), y el array vacío `[]` también se convierte en 0 al comparar. Solución: usar siempre `===`.

## Gestión de Estados Nulos
Usamos `null` para ausencia intencional de valor y `undefined` cuando el sistema no ha asignado un valor. En modelos de libros, `null` es ideal para campos opcionales que el usuario aún no llena.