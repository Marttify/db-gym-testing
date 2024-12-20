# Gym CRUD API

## Descripción
Este proyecto es una API desarrollada con Node.js y Express que permite gestionar las operaciones CRUD de un gimnasio, incluyendo usuarios, asistencias, ejercicios, rutinas, planes, membresías, y entrenadores. Utiliza PostgreSQL como base de datos y herramientas como TablePlus, dbning, y Postman para la gestión y pruebas.

---

## Requisitos previos
- **Node.js** v14 o superior
- **PostgreSQL** instalado
- **Postman** para pruebas de API (opcional)
- **TablePlus** o **dbning** para la gestión de la base de datos

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

## Crear las tablas en PostgreSQL

Para crear las tablas en tu base de datos PostgreSQL, ejecuta las siguientes consultas en tu cliente de base de datos (como TablePlus o dbning):

### Tabla Usuarios
```sql
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol VARCHAR(20) NOT NULL CHECK (rol IN ('administrador', 'entrenador', 'cliente')),
    fecha_registro DATE NOT NULL,
    estado BOOLEAN DEFAULT TRUE
);
```

### Tabla Planes
```sql
CREATE TABLE Planes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    duracion INT NOT NULL, -- Duración en meses
    descripcion TEXT
);
```

### Tabla Membresías
```sql
CREATE TABLE Membresias (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    plan_id INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (plan_id) REFERENCES Planes(id)
);
```

### Tabla Entrenadores
```sql
CREATE TABLE Entrenadores (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    especialidad VARCHAR(100),
    calificacion DECIMAL(3, 2), -- Ejemplo: 4.5
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);
```

### Tabla Ejercicios
```sql
CREATE TABLE Ejercicios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    musculo_objetivo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    nivel_dificultad VARCHAR(20) NOT NULL CHECK (nivel_dificultad IN ('basico', 'intermedio', 'avanzado'))
);
```

### Tabla Rutinas
```sql
CREATE TABLE Rutinas (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    entrenador_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    objetivo TEXT,
    fecha_creacion DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id),
    FOREIGN KEY (entrenador_id) REFERENCES Entrenadores(id)
);
```

### Tabla Rutinas_Ejercicios
```sql
CREATE TABLE Rutinas_Ejercicios (
    id SERIAL PRIMARY KEY,
    rutina_id INT NOT NULL,
    ejercicio_id INT NOT NULL,
    repeticiones INT NOT NULL,
    series INT NOT NULL,
    FOREIGN KEY (rutina_id) REFERENCES Rutinas(id),
    FOREIGN KEY (ejercicio_id) REFERENCES Ejercicios(id)
);
```

### Tabla Progreso
```sql
CREATE TABLE Progreso (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    peso DECIMAL(5, 2) NOT NULL, -- Ejemplo: 70.50 kg
    porcentaje_grasa DECIMAL(5, 2), -- Ejemplo: 15.00 %
    fecha DATE NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);
```

### Tabla Asistencias
```sql
CREATE TABLE Asistencias (
    id SERIAL PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha TIMESTAMP NOT NULL,
    estado VARCHAR(20) NOT NULL CHECK (estado IN ('presente', 'ausente')),
    FOREIGN KEY (usuario_id) REFERENCES Usuarios(id)
);
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
