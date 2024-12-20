# Gym CRUD API

## Descripción
Este proyecto es una API desarrollada con Node.js y Express que permite gestionar las operaciones CRUD de un gimnasio, incluyendo usuarios, asistencias, ejercicios, rutinas, planes, membresías, y entrenadores. Utiliza PostgreSQL como base de datos y herramientas como TablePlus, dbning, y Postman para la gestión y pruebas.

---

## Requisitos previos
- Node.js v14 o superior
- PostgreSQL instalado
- Postman para pruebas de API (opcional)
- TablePlus o dbning para la gestión de la base de datos

---

## Instalación
1. Clona este repositorio:
   ```bash
   git clone <URL-del-repo>
   cd <nombre-del-directorio>
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura tu archivo `.env` con los detalles de tu base de datos PostgreSQL.

4. Inicia el servidor:
   ```bash
   npm run start:dev
   ```

5. El servidor estará escuchando en `http://localhost:3000` por defecto.

---

## Endpoints disponibles
### Usuarios
- **GET** `/get-usuarios` - Obtiene todos los usuarios.
- **GET** `/get-usuarios/:id` - Obtiene un usuario por su ID.
- **POST** `/create-usuario` - Crea un nuevo usuario. **Body JSON**:
  ```json
  {
    "name": "Nombre del usuario",
    "email": "correo@example.com"
  }
  ```

### Asistencias
- **GET** `/get-asistencias` - Obtiene todas las asistencias.
- **POST** `/create-asistencia` - Crea una nueva asistencia. **Body JSON**:
  ```json
  {
    "userId": 1,
    "fecha": "2024-12-20"
  }
  ```

### Ejercicios
- **GET** `/get-ejercicios` - Obtiene todos los ejercicios.
- **POST** `/create-ejercicio` - Crea un nuevo ejercicio. **Body JSON**:
  ```json
  {
    "nombre": "Sentadillas",
    "descripcion": "Ejercicio para piernas."
  }
  ```

### Rutinas
- **GET** `/get-rutinas` - Obtiene todas las rutinas.
- **POST** `/create-rutina` - Crea una nueva rutina. **Body JSON**:
  ```json
  {
    "nombre": "Rutina de fuerza",
    "descripcion": "Ejercicios para mejorar la fuerza."
  }
  ```

### Planes
- **GET** `/get-planes` - Obtiene todos los planes.
- **POST** `/create-plan` - Crea un nuevo plan. **Body JSON**:
  ```json
  {
    "nombre": "Plan Premium",
    "descripcion": "Acceso completo al gimnasio."
  }
  ```

### Membresías
- **GET** `/get-membresias` - Obtiene todas las membresías.
- **POST** `/create-membresia` - Crea una nueva membresía. **Body JSON**:
  ```json
  {
    "userId": 1,
    "planId": 1,
    "fechaInicio": "2024-12-01",
    "fechaFin": "2025-12-01"
  }
  ```

---

## Tecnologías utilizadas
- **Node.js**
- **Express**
- **PostgreSQL**
- **TablePlus/dbning** para gestión de base de datos
- **Postman** para pruebas de API
- **body-parser** para parsear requests

---

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

---

