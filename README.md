
## MÓDULO SOBRE REACT JS

1. Explicar brevemente el concepto de ReactJS y sus principales características.
- ReactJS es una librería de Javascript para desarrollar interfaces de usuario y en particular para Single Page Applications. Sus principales características son:
    - Declarativo: Usa sintaxis declarativa, es decir, se especifica la tarea que se debe realizar, en lugar del cómo.
    - Unidireccional: Quiere decir que los datos fluyen en una única dirección; de los componentes padres a los componentes hijos.
    - Universal: Se puede usar del lado del cliente o del servidor, e incluso en aplicaciones móviles con React Native.
    - Componentes: React se basa en la creación de componentes para la construcción de la UI. Cada componente cuenta con su propio estado, y cuando se da un cambio, la interfaz se re-renderiza.
    - Virtual DOM: Es el mecanismo que usa React para renderizar los componentes, representa al DOM real y se almacena en memoria. 
2. Definir qué es un componente en ReactJS y mencionar los tipos de componentes que
existen.
- Son piezas dé código que renderizan una parte de la interfaz que pueden ser parametrizados, reutilizados y pueden mantener su propio estado. Un componente se puede definir usando clases o funciones.
3. ¿Qué es el Virtual DOM y cuál es su función en ReactJS?
- Es una representación visual del DOM real guardada en memoria y se crea cada vez que hay un cambio en el DOM, lo que permite comparar el DOM actual con el DOM anterior con el fin de determinar qué cambios se deben realizar en el DOM real.
4. ¿Qué es JSX en ReactJS y porqué es importante?
- Es una extensión de Javascipt que permite declarar lo que se requiere que React renderice y usa una sintaxis similar a HTML, facilitando la legibilidad del código.
5. ¿Qué es un Hook en ReactJS y cuál es su propósito?
- Permite dotar a los componentes funcionales de todas las características de ReactJS, como por ejemplo, el manejo de estado.
6. Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan.
- Estado: Permite a un componente recordar información, como datos ingresados por el usuario a través de un formulario.
- Contexto: Permite a un componente recibir información de un padre sin necesidad de usar props.
- Effect: Permite a un componente conectarse y sincronizarse con algún sistema externo, como por ejemplo eventos de red, animaciones o código que no usa React. 

7. ¿Cuáles son las reglas de uso para los Hooks en ReactJS?
- No llamar hooks dentro de ciclos, condicionales o funciones anidadas.
- No usar hooks dentro de funciones regulares, siempre se deben llamar desde componentes funcionales.
8. Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus
principales componentes y Hooks.
- React Router es una librería para la gestión de rutas en un proyecto React, sus principales componentes son:
    - BrowserRouter: Sincroniza la UI con la URL del navegador. 
    - Routes: Genera un árbol de rutas para reemplazar la vista con el componente que coincida con la URL en el navegador. 
    - Route: Representa una ruta en el árbol. Las propiedades path y element representan una ruta.
    Los hooks principalmente usados son: 
    - useParams: Retorna un objeto que contiene pares llave-valor de cualquier parámetro existente en la URL.
    - useNavigate: Retorna una función que permite manejar la trazabilidad en las rutas de la aplicación.
    - useLocation: Permite acceder al objeto 'location' que representa la URL activa.

9. Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.
- Instalar la librería react-router-dom.
- Crear un componente destinado al manejo de rutas.
- En el archivo main.jsx, se envuelve el componente anteriormente mencionado, con el BrowserRouter.
- Se usan los componentes Route y Routes para renderizar las rutas disponibles de la aplicación. Siendo Roots un componente de orden superior y Route se usa para renderizar cada ruta con los atributos path y element.

10 .Describir cómo crear un proyecto ReactJS con Vite
- Usar el comando 
npm create vite@latest project_name --template react

12.Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección
- Crear una carpeta y usar el comando
```
npm init -y
```
- Dentro del proyecto, crear una carpeta src con una carpeta data y un archivo index.js.
- Dentro de data, se crea un archivo json, que servirá como base de datos para json server.
- Instalar json server con el comando:
```
npm i json-server
```
- En el archivo index.js usar el siguiente código para configurar el servidor.
```
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(`${__dirname}/data/db.json`);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

server.use(router);
server.use(middlewares);

server.listen(port, () => {
    console.log("JSON Server is running");
});
```
- En el package.json, se reemplaza el valor de la llave 'main' por lo siguiente:
```
"src/index.js"
```
- Dentro del valor para la llave 'scripts', se agrega el siguiente par:
```
"start": "node src/index.js"
```

13.Describir cómo desplegar una aplicación en cualquier Hosting de su elección.
- Inicializar el repositorio local y se conecta con uno remoto (Github, GitLab)
- Seleccionar el hosting que se quiera usar (Render, Railway, FL0, etc.).
- Para desplegar con Render:
    - Iniciar sesión con usuario y contraseña desde el sitio web de render.
    - Dar clic en el botón 'new +' y seleccionar la opción web service.
    - Seleccionar la opción 'Build and deploy from a git repository'
    - Dar clic en 'next'
    - Seleccionar el repositorio que contiene el código a desplegar. 
    - Se debe autorizar el acceso al repositorio.
    - Configurar nombre al servicio con la opción 'name'
    - Clic en 'Create web service'



## MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER
