# ** Solucion a prueba beMaster **

npm install

npm run dev

#### 1. Ejercicio 1: Consumo de APIs
Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
más populares del usuario "google".
 ### Solución:
 Buscar en:
 http://localhost:3030/api-docs/#/
 
curl -X 'GET' \
  'http://localhost:3030/api/beMaster' \
  -H 'accept: */*'
  
 #### Ejercicio 2: Nomenclatura
Te presentamos el siguiente fragmento de código:
function f(x, y, z) {
let a = x + y;
let b = a * z;
let c = Math.sin(b);
return c;
}
Reemplaza los nombres de las variables con nombres más descriptivos que reflejen mejor
su función.

### Solución:

curl -X 'POST' \
  'http://localhost:3030/api/nomenclatura' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "anguloInicial": 10,
    "incremento": 1,
    "factorDeAmplificacion": 1
}'

#### Ejercicio 3: Pensamiento lógico
Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].


### Solución:

curl -X 'POST' \
  'http://localhost:3030/api/pensamiento' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "ingreseNumero": 90
}'


#### Ejercicio 4: Modelado de bases de datos
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.

### Solución:
Ver la ruta src/bd/ModeloBaseDatos.sql


##### Ejercicio 5: Arquitectura del backend
Describe cómo estructurarías el backend de una aplicación de comercio electrónico. Habla
sobre las tecnologías que utilizarías, la organización de los archivos, el uso de patrones de
diseño, etc.


### Solución:
Ver la ruta ReadmeEjercicio5.md


#### Ejercicio 6: Nomenclatura
Crea un documento de políticas de nomenclatura para el equipo de desarrollo de una
compañía, la política debe incluir nomenclatura de: bases de datos, variables, funciones,
clases, git, etc.

### Solución:
Ver la ruta ReadmeEjercicio6.md


