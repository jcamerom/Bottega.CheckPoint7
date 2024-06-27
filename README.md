## Checkpoint 7

### 1) ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?
JavaScript es un lenguaje de programación interpretado de alto nivel. Se utiliza principalmente para crear aplicaciones y páginas web interactivas, lo que permite a los desarrolladores crear interfaces de usuario dinámicas. JavaScript está diseñado para ejecutarse en navegadores web, lo que lo convierte en un lenguaje de programación del lado del cliente. Esto significa que el código escrito en JavaScript se puede ejecutar directamente en el navegador, sin necesidad de software o herramientas adicionales.

Las principales diferencias entre JavaScript y otros lenguajes de programación:

#### Compilado vs interpretado
Una de las principales diferencias entre JavaScript y otros lenguajes de programación es cómo se ejecutan. La mayoría de los lenguajes de programación son compilados, lo que significa que el código debe compilarse en código de máquina antes de poder ejecutarse. Sin embargo, JavaScript es un lenguaje interpretado, lo que significa que no es necesario compilarlo antes de poder ejecutarlo. 

#### Del lado del cliente frente al lado del servidor

Otra diferencia clave entre JavaScript y otros lenguajes de programación es dónde se ejecutan. Como se mencionó anteriormente, JavaScript fue diseñado para ejecutarse en navegadores web, por lo que tipicamente se ha utilizado sobre todo en el lado del cliente.  Sin embargo puede utilizarse también en el lado del servidor, con entornos como Node.js. Todo ello hace de Javascript un lenguaje muy versátil para escribir código entre el lado del servidor, el lado del cliente y directamente ejecutable en navegadores. 

#### Orientado a objetos versus procesal

JavaScript es un lenguaje de programación orientado a objetos. Esto significa que el código escrito en JavaScript se compone de objetos que contienen datos y funciones. Estos objetos se pueden manipular y utilizar para crear programas complejos. Por otro lado, muchos otros lenguajes de programación son procedimentales, lo que significa que el código escrito en estos lenguajes consta de una serie de instrucciones que deben seguirse en orden.

#### Escritura dinámica versus estática

Otra diferencia clave entre JavaScript y otros lenguajes de programación es cómo manejan los tipos de datos. JavaScript es un lenguaje dinámico, lo que significa que las variables no necesitan declararse con un tipo específico. Esto significa que los desarrolladores no tienen que especificar su tipo al declarar variables. Otros lenguajes de programación como Java o C# suelen tener tipos estáticos, lo que significa que las variables deben declararse con un tipo específico antes de poder usarse.

#### Basado en eventos y asincrónico
JavaScript está controlado por eventos, lo que significa que responde a las interacciones del usuario u otros eventos en una página web. También admite programación asincrónica, lo que permite ejecutar ciertas tareas sin bloquear el hilo principal, lo que genera experiencias de usuario más fluidas.

#### Funciones de primera clase:
Las funciones en JavaScript son ciudadanas de primera clase, lo que significa que pueden asignarse a variables, pasarse como argumentos a otras funciones o devolverse desde funciones. Esta característica es fundamental para permitir paradigmas de programación funcional.

#### Fácil integración con HTML y CSS

JavaScript se integra perfectamente con HTML y CSS, lo que facilita agregar comportamiento dinámico e interactividad a las páginas web. Al manipular el DOM (modelo de objetos de documento), JavaScript puede actualizar el contenido de la página, responder a los eventos del usuario y crear interfaces de usuario atractivas.




### 2) ¿Cuáles son algunos tipos de datos JS?
Los tipos de datos en Javascript se pueden dividir en dos grandes bloques: números primitivos y no primitivos, y se diferencian entre sí sobre todo por la mutabilidad. Los datos primitivos son inmutables, es decir, no pueden ser modificables una vez creados, y los no primitivos sí son mutables, por lo que sí se pueden modificar una vez creados.

#### a) Datos primitivos de JavaScript

Existen seis tipos de datos primitivos. Hay que tener cuidado con este concepto porque JavaScript en muchas situaciones convierte automáticamente los datos primitivos en objetos equivalentes a excepción de  **null**  y  **undefined**.

-   **Undefined:**  representa una variable que no ha sido declarada o a la cual no se le ha asignado un valor.
Ejemplo: let x;

-   **Null:** representa la ausencia intencional de cualquier valor, un valor nulo o «vacío».
Ejemplo: let nulo = null;

-   **Boolean:** representa un valor lógico y puede tener dos valores,  **"true"**  o  **"false"**.
Ejemplo: let x = True

-   **Number:** permite representar y manipular valores numéricos como 37» o «-9.25».
Ejemplo: let num = 2.6;

-   **String:** representa datos textuales (cadenas de caracteres).
Ejemplo: let cadena = 'ejemplo de cadena 1';

-   **BigInt:**  representa valores numéricos que son demasiado grandes para ser representados por el tipo de dato  **number**.
Ejemplo: let numBig = 9383391212749273937323;

-   **Symbol:**  es un valor primitivo único e inmutable.
Ejemplo: let sym = Symbol("foo");



#### b) Datos no primitivos de JavaScript
Representan estructuras de datos más complejas, referencias a objetos en memoria. Son los llamados objetos, usados para muy diversos fines, como almacenar trabajar con listas ordenadas, funciones, fechas, colecciones de varios datos o entidades más complejas asociadas con un nombre clave.

Con la palabra "new" podemos crear los distintos tipos de objetos que hay en Javascript, cada uno con unos métodos específicos asignados para trabajar con ellos:
```Javascript
	new Object() // A new Object object  
	new Array() // A new Array object  
	new Map() // A new Map object  
	new Set() // A new Set object  
	new Date() // A new Date object  
	new RegExp() // A new RegExp object  
	new Function() // A new Function object
```
Vamos a resaltar que las funciones se pueden utilizar como un objeto en Javascript, porque son funciones llamadas de "primera clase", gracias a que son asignables a una variable y pueden utilizarse métodos asignados con ellos. 

Por último, podemos resaltar que los arrays son también objetos, como otras colecciones, sin embargo, sus valores serán manejados a partir del lugar que ocupan en el array. Son por tanto, listas ordenadas. 



### 3) ¿Cuáles son las tres funciones de String en JS?
Para empezar, hablaremos de las funciones en JavaScript como un bloque de código o un conjunto de instrucciones, que realiza una tarea específica y que puede reutilizarse a voluntad. Es por lo tanto uno de los _"building blocks"_ fundamentales de JavaScript.
Ejemplo:
```Javascript
function sumar(num1, num2) { // Define la función llamada sumar con dos parámetros, num1 y num2 
	return num1 + num2; // Devuelve la suma de los dos parámetros 
}
```
Existen tres formas de crear una función en JavaScript:

#### 1. Por declaración

Es probablemente la más utilizada y la más fácil de recordar, sobre todo si ya se conoce algún otro lenguaje de programación. Consiste en declarar la función con un nombre y sus parámetros de entrada entre paréntesis.
Ejemplo:
```Javascript
function add(a, b) { 
	return a+b;
}
```

#### 2. Por expresión

Este tipo ha tomado popularidad y consiste básicamente en guardar una función en una variable, para así ejecutar la variable como si fuera una función. Este nuevo recurso ha dado pie a las  **funciones anónimas**.
```Javascript
const plus = function (a, b){ return a+b;}
```

#### 3. Por constructor de objeto

La  variante de constructor de objeto es la menos recomendada y casi no se utiliza. Únicamente nos ayuda a recordar que  **las funciones también son tipos de objetos en JavaScript**.
```Javascript
const greetings = new Function("return 'Hola';");
```
Es el caso menos usual para construir funciones. El cuerpo de la función debe introducirse como un String en el interior del paréntesis de "new Function()". Se le invoca como: greetings(), y escribe 'Hola'.

Estos tipos nos hablan de cómo definir nuestras propias funciones; sin embargo, en cada tipo de dato de JavaScript, también aparecen un conjunto de funciones disponibles para operar cada uno de ellos de forma predefinida. A continuación, listamos algunas de las más utilizadas.
1.  String.split()
2.  String.substring()
3.  String.trim()
4.  String.slice()
5.  Array.map()
6.  Array.push()
7.  Array.pop()
8.  Array.slice()
9.  Object.toString()
10.  Number.toFixed()
11.  parseInt()
12.  Math.random()
13.  console.log()

Asi por ejemplo, para los tipos de datos "String", aparecen un conjunto de funciones predefinidas o métodos, que podemos usar para trabajar con cadenas de caracteres. Entre ellas podemos resaltar por ejemplo:
#### String.split()

Divide una cadena en un array de subcadenas de la cadena original a partir de un carácter separador:
```Javascript
let cadena = "Hola,mundo,JavaScript";
cadena.split(“,”);
// ["Hola", "mundo", "JavaScript"]
```

#### String.substring()

Extrae caracteres desde un índice A hasta un índice B sin incluirlo:
```Javascript
let cadena = "Hola";
cadena.substring(0,3);
// "Hol" -> Porque no incluye el carácter de la posición 3.
```


#### String.trim()

Elimina espacios en blanco al inicio y al final de una cadena:
```Javascript
let cadena = " Hola ";
cadena.trim();
// "Hola"
```

### 4) ¿Qué es un condicional?
De la forma más sencilla, el código que escribimos se ejecutará de línea a línea, una detrás de otra. Pero a veces se hace necesario romper esa secuencia y crear ramas que nos permitan tomar diferentes caminos en el código dependiendo de ciertas condiciones.

Por ejemplo, si escribimos un programa que nos diga si un número es mayor o menor a diez. Si es mayor a 10 debería imprimir una cosa, pero si es menor debería imprimir otra.

A este concepto se le conoce como condicional y en Javascript las podemos programar de tres maneras:

- **Para un número pequeño de alternativas:**
	Utilizamos la siguiente estructura:
	```Javascript
	if (condicion1) { // código a ejecutar si la condición1 es verdadera 
	} else if (condicion2) { // código a ejecutar si la condición2 es verdadera 
	} else { // código a ejecutar si ninguna de las condiciones anteriores es verdadera 
	}
	```
	Cada **if** representa un caso de estudio donde se va a evaluar una condición. Si la condición resulta verdadera, se ejecuta un código que viene a continuación entre llaves. 
	Cada **else if** representa un caso alternativo de evaluación. con su código a ejecutar entre llaves si la nueva condición se comprueba como verdadera.
	Finalmente **else**, recoge todas las demás alternativas de no confirmarse las anteriores y ejecuta otro código distinto.
	
- **Para un número de alternativas mayor:**
```Javascript
	switch (expresion) { 
		case valor1: // código a ejecutar si la expresión es igual a valor1 
			break; 
		case valor2: // código a ejecutar si la expresión es igual a valor2 
			break; 
		// más casos 
		default: // código a ejecutar si la expresión no coincide con ninguno de los valores anteriores 
	}
```
En este caso se considera una expresión entre paréntesis del switch, y se evalúan los valores resultantes caso por caso. En cada uno de los casos posibles se ejecuta un código diferente. También dispone de un caso "default" en el cual si el valor resultante de la expresión es diferente al de los casos evaluados, se ejecuta un último código. 

- **Usando un operador ternario:**
(Será explicado en el siguiente apartado)

### 5) ¿Qué es un operador ternario?
El operador ternario en JavaScript es otra alternativa de escribir una estructura condicional. Es el único operador en JavaScript que puede tomar 3 elementos para una operación: una condición, una expresión a ejecutar si la condición es verdadera y otra expresión a ejecutar si la condición es falsa. La sintaxis del operador ternario es la siguiente:
```
condicion ? expresionVerdadera : expresionFalsa;` 
```
Ejemplo:
```Javascript
let edad = 18;
let votar = (edad >= 18) ? "Ya puede votar" : "No puede votar";
console.log(votar); // "Ya puede votar"` 
```
En este ejemplo, la variable `votar` será asignada a "Ya puede votar" si `edad` es mayor o igual a 18; de lo contrario, será asignada a "No puede votar".

El operador ternario es útil para escribir condicionales cortos y mejorar la legibilidad del código, siempre que no se abuse de su uso, ya que en condicionales más complejos puede afectar la claridad del código


### 6) ¿Cuál es la diferencia entre una declaración de función y una expresión de función?
En JavaScript tenemos dos maneras principales de definir funciones, como una declaración o como una expresión.

```Javascript
// DECLARACIONES DE FUNCIÓN (No se asignan a variables)
// Función con nombre:
	function suma1(a, b) { 
		return a + b 
	} 
	

// EXPRESIONES DE FUNCIÓN (Se asignan a variables): 
// Tres tipos posibles:
// Función anónima:
	var suma2 = function(a, b) { 
		return a + b 
	} 

// Función con nombre:
	var suma2 = function suma2(a, b) { 
		return a + b 
	} 

// Función de flecha (anónima por defecto): 
	var suma2 = (a, b) => { 
		return a + b 
	}
```
Para entender bien sus diferencias de uso vamos a hablar primero de **Hoisting**.  Cuando va a ejecutarse el código, el intérprete de JavaScript divide la declaración y asignación de funciones y variables: JavaScript "hoists" o "alza" tus declaraciones a la parte superior de su scope (ámbito) antes de la ejecución.
Veamos un ejemplo:
```Javascript
var nombre = "Rick"
var apellido = "Sanchez"
function nombreCompleto(primero, segundo) {
  return `${primero} ${segundo}`
}

var pintarEdad = function (numero) {
  console.log(`la edad es de ${numero} años`)
}

```
En el bloque de código anterior podemos ver tanto declaraciones de variables como sus asignaciones en la misma línea. Sin embargo, el intérprete de ejecución hace que ambas cosas ocurran en momentos separados. El intérprete de JavaScript lo que realmente hace es  **declarar todas las variables y funciones primero antes de asignar y ejecutar cualquier otro valor.**  Si quisiéramos ver el orden real en el que se va ejecutando cada cosa, sería algo así:
```Javascript
// declaraciones primero
var nombre;
var apellido;
function nombreCompleto(primero, segundo) {
    return `${primero} ${segundo}`
}
var pintarEdad;

// asignaciones después
nombre = "Rick"
apellido = "Sanchez"
pintarEdad = function(numero) {
    console.log(`la edad es de ${numero} años`)
}
```
A este "reorden" se le llama _Hoisting_ e indica que la declaración y la inicialización de una variable o función ocurren en momentos distintos, incluso cuando se escribe en la misma línea.

Gracias a que las declaraciones de funciones son ascendidas al momento de ejecución de nuestro programa, la declaración de función se puede ejecutar incluso antes de su definición.
```Javascript
nuevaFuncion()

function nuevaFuncion() {
  console.log("Hola Mundo!")
}

// Hola Mundo!
```

En cambio, esto no es posible con las expresiones de funciones, ya que no se sabe el valor que va a tener nuestra variable previamente declarada.
```Javascript
nuevaFuncion()

var nuevaFuncion = function nuevaFuncion() {
  console.log("Hola Mundo!")
}

// TypeError: nuevaFuncion is not a function
```
En las expresiones de funciones darle nombre a la función es opcional. En cambio para las declaraciones es obligatorio. Además ahora es bastante habitual ver y usar funciones anónimas, ya que las expresiones de función flecha (`=>`) no permiten asignarles nombre. 
Utilizar este tipo de declaraciones son recomendables en determinados momentos, pero también conlleva implicaciones. Por un lado, son más legibles y fáciles de usar, pero por otro, son un poco más complejas de inspeccionar y seguir en la cola de ejecución. 


### 7) ¿Qué es la palabra clave "this" en JS?
La palabra clave **this** de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Ello es principalmente debido a:
1) El modelo de herencia no está basada en clases como en otros lenguajes.
2) Al ser interpretado, this se determina en tiempo de ejecución, no en tiempo compilado como en otros lenguajes.

En Javascript, en pocas palabras, la palabra **this** siempre se refiere a un objeto. Lo que pasa es que el objeto al que se refiere variará dependiendo de cómo y dónde se llame this. 
Veamos los casos más comunes y cómo se comporta en cada uno de ellos.

#### Cómo llamar a this por sí mismo

Si llamamos a this por sí mismo, es decir, no dentro de una función, objeto o lo que sea, hará referencia al objeto de ventana global: **windows**.
Por ejemplo:
```Javascript
console.log('this alone', this);
```
Obtendrás esto en tu consola:  `[object Window]`. Que podrá ser expandido, mostrando todas las propiedades que contiene. Además hay que tener cierto cuidado de no ensuciar el objeto global windows.

#### Llamar a una función sin ningún objeto:
Ejemplo:

```javascript
function sayHi() {
  alert(this);
}

sayHi(); // undefined` 
```

En este caso  `this`  es  `undefined`  en el modo estricto. 

#### Cómo llamar a this en un método de objeto

Pero si llamamos a un this que se encuentra dentro de un método de objeto, podemos conseguir diferentes resultados.
Por ejemplo:
```Javascript
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getThis : function() {
      return this;
    }
};

console.log('this in object method', person.getThis());
```
Si ejecutamos este código, el objeto `person` será creado, y console.log invocará al método `person.getThis()` . Cuando entre en la función, devolverá el objeto `this` que en este caso hará referencia a todo el objeto en el que se encuentra, es decir, `person`. Por tanto devolverá:
```javascript
this in object method Object { firstName: "John", lastName: "Doe", id: 5566, getThis: function() { ... } }
```


Por otra parte, si lo que queremos es acceder a determinadas propiedades y métodos del objeto podemos usar: 

```javascript
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.firstName + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName());
```

#### this_  en invocaciones de construcción

A diferencia de otros lenguajes, JavaScript no dispone de constructores como tal, sino de llamadas de construcción  _”construction calls”_  a una función.

A través del operador  `new`  se crea un nuevo objeto, se asigna su prototipo a la función constructora y lo que es más importante: dentro de la función que hace de constructor, el valor de  _this_  **hace referencia a ese nuevo objeto que se está creando**.

Por eso, cuando una función es invocada como un constructor, gracias a ese valor específico de  _this_  **podemos establecer los parámetros que recibe la función como propiedades del nuevo objeto**:
```javascript
function Gato(raza, color)  {
this.raza = raza;
this.color = color;
console.log(this);
// Gato {raza: "europeo", color: "negro"}
}
const guizmo = new Gato('europeo', 'negro');
```
#### El uso de this en las funciones arrow
A diferencia de las funciones tradicionales, las funciones flecha (arrow functions) en JavaScript tienen un comportamiento especial con la palabra clave `this`
-   `this` dentro de una función flecha **hereda el valor de `this` del contexto donde se define la función flecha**. No crea su propio enlace a `this`.

Esto puede ser muy útil para mantener la coherencia del valor de `this` en ciertas situaciones, pero también puede generar confusiones si no se tiene en cuenta.

Por ejemplo:
```javascript
const persona = {
  nombre: "Juan",
  saludar: function() {
    console.log("Hola, mi nombre es", this.nombre); // this refiere a persona
  },
  saludarFlecha: () => {
    console.log("Hola, mi nombre es", this.nombre); // ¡Puede dar error!
  }
};

persona.saludar(); // Imprime "Hola, mi nombre es Juan"

persona.saludarFlecha(); // Puede dar error porque this no apunta a persona

```
En el segundo ejemplo, la función flecha `saludarFlecha` intenta acceder a `this.nombre`, pero como la función flecha hereda el `this` del contexto donde se define (que en este caso es el objeto global `window`), puede dar un error.

Para evitar este error, hay que tener en cuenta el contexto donde se crea la función flecha.
