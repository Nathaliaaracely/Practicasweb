# Sistema de Gestión de Donaciones y Pagos

## 📌 Descripción del Proyecto
Este proyecto es una API **GraphQL** desarrollada con **NestJS** que gestiona un sistema de donaciones y pagos. Implementa una arquitectura por capas (**Datos**, **Lógica de Negocio**, **API**) siguiendo los principios de NestJS y TypeORM.

---

## 🧩 Entidades Implementadas

### 1. Donaciones
- Gestiona las donaciones recibidas.  
**Atributos principales**:
  - ID
  - Monto
  - Fecha
  - Estado
  - Descripción

### 2. Productos de Donaciones
- Relaciona productos con las donaciones.  
**Atributos principales**:
  - ID
  - Nombre del producto
  - Cantidad
  - Descripción
  - ID de donación (relación con Donaciones)

### 3. Transacciones de Pagos
- Gestiona las transacciones de pago.  
**Atributos principales**:
  - ID
  - Monto
  - Método de pago
  - Estado
  - Fecha
  - ID de donación (relación con Donaciones)

---

## ⚙️ Requisitos Previos
- Node.js (versión 16 o superior)
- npm (gestor de paquetes de Node.js)
- Git

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio:
```bash
git clone https://github.com/TuUsuario/2parcial_2practicas.git
cd 2parcial_2practicas
2. Instalar dependencias:
bash
Copiar
Editar
npm install
3. Configuración de la base de datos:
El proyecto usa SQLite como base de datos.

La base se crea automáticamente al iniciar la aplicación.

Se generará un archivo db.sqlite en la raíz del proyecto.

🏃‍♀️ Ejecución del Proyecto
Modo desarrollo:
bash
Copiar
Editar
npm run start:dev
Modo producción:
bash
Copiar
Editar
npm run start
Acceder al GraphQL Playground:
URL: http://localhost:3000/graphql
Desde aquí puedes realizar consultas y mutaciones.

🗂️ Estructura del Proyecto
ruby
Copiar
Editar
src/
├── donaciones/             # Módulo de gestión de donaciones
├── productos-donaciones/   # Módulo de productos relacionados con donaciones
├── transacciones-pagos/    # Módulo de gestión de transacciones de pagos
└── app.module.ts           # Módulo principal de la aplicación
🛠️ Características Técnicas
Arquitectura por capas:

Capa de Datos (TypeORM)

Capa de Lógica de Negocio (Servicios)

Capa de API (GraphQL)

Validación de datos con class-validator

Gestión de errores centralizada

Documentación automática con GraphQL Playground

🤝 Contribución
Para contribuir al proyecto:

Haz un fork del repositorio

Crea una nueva rama:

bash
Copiar
Editar
git checkout -b feature/AmazingFeature
Realiza tus cambios y haz commit:

bash
Copiar
Editar
git commit -m 'Add some AmazingFeature'
Sube tu rama:

bash
Copiar
Editar
git push origin feature/AmazingFeature
Abre un Pull Request

📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

Copiar
Editar

¿Quieres que lo genere como archivo descargable también?







Tú dijiste:
damelo en formato


ChatGPT Plus
¡Claro! Aquí tienes el archivo README.md listo para descargar en formato Markdown puro:

📎 Descargar aquí el archivo README.md:
Haz clic para descargar

También te dejo el contenido en el archivo descargable:

📄 Archivo: README.md

markdown
Copiar
Editar
# Sistema de Gestión de Donaciones y Pagos

## 📌 Descripción del Proyecto
Este proyecto es una API **GraphQL** desarrollada con **NestJS** que gestiona un sistema de donaciones y pagos. Implementa una arquitectura por capas (**Datos**, **Lógica de Negocio**, **API**) siguiendo los principios de NestJS y TypeORM.

---

## 🧩 Entidades Implementadas

### 1. Donaciones
- Gestiona las donaciones recibidas.  
**Atributos principales**:
  - ID
  - Monto
  - Fecha
  - Estado
  - Descripción

### 2. Productos de Donaciones
- Relaciona productos con las donaciones.  
**Atributos principales**:
  - ID
  - Nombre del producto
  - Cantidad
  - Descripción
  - ID de donación (relación con Donaciones)

### 3. Transacciones de Pagos
- Gestiona las transacciones de pago.  
**Atributos principales**:
  - ID
  - Monto
  - Método de pago
  - Estado
  - Fecha
  - ID de donación (relación con Donaciones)

---

## ⚙️ Requisitos Previos
- Node.js (versión 16 o superior)
- npm (gestor de paquetes de Node.js)
- Git

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio:
```bash
git clone https://github.com/TuUsuario/2parcial_2practicas.git
cd 2parcial_2practicas
2. Instalar dependencias:
bash
Copiar
Editar
npm install
3. Configuración de la base de datos:
El proyecto usa SQLite como base de datos.

La base se crea automáticamente al iniciar la aplicación.

Se generará un archivo db.sqlite en la raíz del proyecto.

🏃‍♀️ Ejecución del Proyecto
Modo desarrollo:
bash
Copiar
Editar
npm run start:dev
Modo producción:
bash
Copiar
Editar
npm run start
Acceder al GraphQL Playground:
URL: http://localhost:3000/graphql
Desde aquí puedes realizar consultas y mutaciones.

🗂️ Estructura del Proyecto
ruby
Copiar
Editar
src/
├── donaciones/             # Módulo de gestión de donaciones
├── productos-donaciones/   # Módulo de productos relacionados con donaciones
├── transacciones-pagos/    # Módulo de gestión de transacciones de pagos
└── app.module.ts           # Módulo principal de la aplicación
🛠️ Características Técnicas
Arquitectura por capas:

Capa de Datos (TypeORM)

Capa de Lógica de Negocio (Servicios)

Capa de API (GraphQL)

Validación de datos con class-validator

Gestión de errores centralizada

Documentación automática con GraphQL Playground

🤝 Contribución
Para contribuir al proyecto:

Haz un fork del repositorio

Crea una nueva rama:

bash
Copiar
Editar
git checkout -b feature/AmazingFeature
Realiza tus cambios y haz commit:

bash
Copiar
Editar
git commit -m 'Add some AmazingFeature'
Sube tu rama: