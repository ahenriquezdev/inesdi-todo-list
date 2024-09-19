# Aplicación TODO con React

Esta es una aplicación simple y funcional de tareas (TODO), construida con **React**. La aplicación permite a los usuarios crear, editar, completar y eliminar tareas.

## Funcionalidades

- Agregar nuevas tareas
- Editar tareas existentes
- Marcar tareas como completadas o pendientes
- Eliminar tareas
- Almacenamiento persistente de datos usando `localStorage`

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **Tailwind CSS**: Para el estilo de los componentes de la interfaz
- **Lucide Icons**: Para los íconos en la navegación y acciones de tareas
- **localStorage**: Para mantener las tareas entre sesiones

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/ahenriquezdev/inesdi-todo-list.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd inesdi-todo-list
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

## Estructura del Proyecto

- `src/components/`: Contiene los componentes `TodoApp`, `TodoList`.
- `src/services/local-storage.js`: Funciones utilitarias para leer y escribir tareas en `localStorage`.
- `public/`: Contiene los activos estáticos del proyecto.

## Características adicionales en la rama `featureLogin`

La rama `featureLogin` incluye una nueva funcionalidad de **login** que permite a los usuarios autenticarse antes de acceder a la lista de tareas. La autenticación se gestiona mediante un formulario de login y la API pública de [Reqres](https://reqres.in/).

### Cómo acceder a la rama `featureLogin`:

1. Cambia a la rama `featureLogin`:

    ```bash
    git checkout featureLogin
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Ejecuta la aplicación:

    ```bash
    npm run dev
    ```

### Funcionalidades en `featureLogin`:

- **Formulario de Login**: Los usuarios deben iniciar sesión para acceder a la lista de TODOs.
- **Autenticación mediante API**: Utiliza el servicio de autenticación de [Reqres](https://reqres.in/).
- **Persistencia de sesión**: El token de autenticación se almacena en `localStorage` para mantener la sesión activa.
- **Logout**: Los usuarios pueden cerrar sesión desde la barra de navegación.

### Usuarios de Prueba

Para probar la funcionalidad de login, utiliza los siguientes correos de prueba. Cualquier contraseña es válida.

- `eve.holt@reqres.in`
- `charles.morris@reqres.in`
- `janet.weaver@reqres.in`
- `emma.wong@reqres.in`
