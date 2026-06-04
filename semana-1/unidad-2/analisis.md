1. Mecanismo de Elevación (Elevación)
¿Cómo funciona por dentro?
El Hoisting es básicamente un comportamiento de JavaScript donde el motor lee el archivo en dos pasadas antes de ejecutarlo. En la primera pasada (fase de lectura o compilación), el motor busca todas las variables y las "eleva" imaginariamente al principio del archivo para registrarlas en la memoria.

El problema surge cuando declaramos variables con var. El motor separa el nombre de la variable de su valor real. Al elevarla, le asigna automáticamente el valor de undefined. Por eso, si intentamos usar una variable varantes de la línea donde le pusimos el valor real, el código no se rompe ni da error, simplemente nos muestra un undefined.

comportamientos impredecibles y deuda técnica significativa.
Resultados inesperados: Al no romperse el código cuando usamos una variable antes de tiempo, el sistema puede seguir corriendo con datos vacíos ( undefined) sin avisarnos. Esto hace que encontrar fallos en el código (bugs) sea un dolor de cabeza.

Fugas de variables: Las variables con varno respetan los bloques de llaves { }(como los de un ifo un for). Esto significa que una variable creada dentro de un ciclo puede terminar saliendo de ahí y modificando datos en otra parte del programa por accidente.

Solución basada en estándares modernos de ECMAScript.
Hoy en día usamos lety const. Aunque estas variables también pasan por el Hoisting, el motor prohíbe estrictamente tocarlas antes de que el código llegue a su línea de asignación. A ese espacio de tiempo donde la variable ya existe en memoria pero no se puede usar se le conoce como TDZ (Zona Muerta Temporal). Si intentas usar un letantes de tiempo, el programa se detiene con un error explícito, lo que hace al código mucho más seguro.

2. Coerción de Tipos (Tipificación Débil)
¿Qué es la coerción de tipos?
En palabras sencillas, la coerción de tipos es cuando JavaScript convierte un tipo de dato en otro de forma automática y oculta. Como JavaScript es un lenguaje de "tipado débil", si intentas hacer operaciones o comparaciones mezclando cosas diferentes (como un número con un texto), en lugar de darte un error en la pantalla, el motor del lenguaje "adivina" y cambia los datos a la fuerza para que la operación se pueda hacer.

Un ejemplo de esto es cuando sumas 5 + "5"y el resultado da "55", porque JavaScript convierte el número en texto automáticamente.

Análisis del proceso de conversión implícita al evaluar [] == ![]
Sabiendo cómo funciona la coerción, podemos entender por qué la expresión [] == ![]nos devuelve true(verdadero). Parece una contradicción, pero el motor de JavaScript transforma los datos a nuestras espaldas en tres pasos:

Se resuelve la negación ( !): El signo !convierte lo que está a su derecha en lo opuesto. Como un arreglo vacío []se considera un valor verdadero en JavaScript, al ponerle el !, el motor lo convierte en el booleano false.

La comparación queda: [] == false
El arreglo se pasa a texto: El operador ==no sabe comparar un objeto (el arreglo) con un booleano, así que obliga al arreglo vacío []a convertirse en un texto vacío ( "").

La comparación queda: "" == false
Todo se convierte a números: Por último, para comparar un texto con un booleano, JavaScript pasa ambos lados a números. Un texto vacío ""se convierte en 0, y el valor falsetambién se convierte en 0.

Al final, la operación real que hace la computadora es 0 == 0. Como esto es verdad, el resultado final de todo el código es true.

Estrategia para mitigar errores derivados de la tipificación débil
Para evitar que JavaScript realice conversiones extrañas a nuestras espaldas y prevenir fallos en el sistema, la estrategia principal es prohibir el uso del operador de igualdad débil ( ==) en el desarrollo moderno. El doble igual existe hoy en día únicamente por temas de retrocompatibilidad con páginas web antiguas, pero en el código nuevo representa un peligro de deuda técnica.

La solución definitiva es utilizar siempre el operador de igualdad estricta ( ===), conocido como el "triple igual". A diferencia del doble igual, el ===no realiza ninguna conversión automática de datos. Lo primero que hace el motor es verificar si los dos elementos son del mismo tipo; si los tipos son diferentes (por ejemplo, comparar un objeto con un booleano, o un texto con un número), devuelve falsede inmediato. Esto elimina cualquier comportamiento impredecible y hace que el código sea 100% seguro y limpio.

3. Gestión de Estados Nulos
¿Qué es la gestión de estados nulos?
La gestión de estados nulos es la estrategia que se utiliza en ingeniería de software para controlar de forma segura la ausencia de datos o la falta de información en un sistema. Cuando estamos modelando objetos de la vida real en el código (como los libros de una biblioteca), es normal que algunos datos no existan o no se conozcan todavía. Gestionar estos estados significa usar los mecanismos del lenguaje para representar el vacío o la nada, evitando que el programa intente leer un dato inexistente y colapsar con un error.

Criterios para usar null y undefined en los datos de los libros
Para que el sistema de la biblioteca no se confunda y el código sea limpio, usamos estos dos valores con reglas muy claras:

¿Cuándo usamos null? (Vacío a propósito): Lo usamos cuando la casilla del libro sí existe, pero sabemos que en la vida real no tiene ningún dato. Es nuestra forma de decirle al sistema: "Ya revisé este libro y confirmo que este espacio está vacío" .

Ejemplo: Si un libro fue escrito por un solo autor y no tiene un ayudante, en la casilla segundoAutorponemos null. Si el libro está libre en la biblioteca y nadie lo ha pedido prestado, en la casilla personaQueLoPrestoponemos null.
¿Cuándo vemos undefined? (Vacío por olvido o error): Este valor nunca lo ponemos nosotros a propósito. Dejamos que aparezca solo cuando hay un error en el código, cuando una variable se creó pero no le hemos puesto valor, o cuando al programador se le olvidó crear una casilla.

Ejemplo: Si intentamos buscar en el sistema el añoDePublicacionde un libro, pero al programador se le olvidó por completo crear esa casilla en el código, JavaScript nos va a responder undefined. Eso nos avisa de inmediato que esa información ni siquiera existe en el sistema.