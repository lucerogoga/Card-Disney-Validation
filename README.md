# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Clientes](#4-clientes)
* [5. Historias de Usuario](#5-historias-de-usuario)
* [6. Prototios de baja fidelidad](#6-prototipos-de-baja-fidelidad)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto

-DisneyLand quiere agregar una seccion de TARJETAS PERSONALIZADAS a su pagina official  donde los clientes podran afiliar sus tarjetas de otros bancos con el costo de 3.00 dolares dandole la oportunidad de poder escoger un diseño de su tematica aparte de darle beneficios por esta afiliacion.

## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

### CSS

- [ ] **Uso de selectores de CSS**

- [ ] **Modelo de caja (box model): borde, margen, padding**

### Web APIs

- [ ] **Uso de selectores del DOM**

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [ ] **Manipulación dinámica del DOM**

### JavaScript

- [ ] **Tipos de datos primitivos**

- [ ] **Strings (cadenas de caracteres)**

- [ ] **Variables (declaración, asignación, ámbito)**

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

- [ ] **Funciones (params, args, return)**

- [ ] **Pruebas unitarias (unit tests)**

- [ ] **Módulos de ECMAScript (ES Modules)**

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

### UX (User eXperience)

- [ ] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [ ] **Crear prototipos para obtener feedback e iterar**

- [ ] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**


## 4. Clientes:
-Los usuarios de esta nueva funcionalidad en la pagina de disney son personas adultas que poseen una tarjeta de credito o debido.

## 5. Historia de Usuario:
-Escoger el diseño de su tarjeta.
 El usuario podra escoger un diseño que se le presenta .
-Mostrar la tarjeta escogida con los datos ingresados.
 Se le mostrara al usuario su tarjeta seleccionada.
-Validar la tarjeta para realizar el pago.
 Mediante el algorithmo de Lunh podremos validar la tarjeta y ejecutar la transaccion del pago por la personalicion cabe aclarar que esta tarjeta sera valida en cualquier lugar.
 
## 6. Prototipos Baja Fidelidad:
Los prototipos los hice en balsamiq son 2 Pantallas y una ventana emergente
Pantalla 1
![prototipo 1](https://github.com/lucerogoga/LIM016-card-validation/blob/main/Prototipo/prototipo1.png)
Pantalla 2
![prototipo 2](https://github.com/lucerogoga/LIM016-card-validation/blob/main/Prototipo/prototipo2.png)
Ventana Emergente 
![prototipo 3](https://github.com/lucerogoga/LIM016-card-validation/blob/main/Prototipo/prototipo3.png)



