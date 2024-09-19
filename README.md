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
