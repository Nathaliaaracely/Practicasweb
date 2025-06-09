# Arquitectura Limpia - Todo API

Implementación de una API REST con arquitectura limpia que soporta múltiples tipos de datasource:
- **Prisma** (PostgreSQL)
- **TypeORM** (PostgreSQL)
- **Memory** (Arreglos de objetos literales en memoria)

## Características

### Arquitectura Limpia
- **Domain Layer**: Entidades, casos de uso, repositorios e interfaces
- **Infrastructure Layer**: Implementaciones de datasources y repositorios
- **Presentation Layer**: Controladores y rutas

### Datasources Disponibles
1. **Prisma**: Base de datos PostgreSQL con ORM Prisma
2. **TypeORM**: Base de datos PostgreSQL con TypeORM
3. **Memory**: Almacenamiento en memoria con arreglos de objetos literales

## Configuración y Desarrollo

### ⚡ Inicio Rápido - Sin Base de Datos (Recomendado para desarrollo)

```bash
# Instalar dependencias
npm install

# Ejecutar con datasource de memoria (NO requiere base de datos)
npm run dev:memory
```

¡Eso es todo! La aplicación funcionará completamente en memoria sin necesidad de Docker ni PostgreSQL.

### 🗄️ Con Base de Datos (Prisma/TypeORM)

#### Opción 1: Prisma
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=PRISMA en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Migrar base de datos
npm run prisma:migrate:prod
# 5. Ejecutar aplicación
npm run dev:prisma
```

#### Opción 2: TypeORM
```bash
# 1. Crear archivo .env basado en .env.template
# 2. Configurar DATASOURCE_TYPE=TYPEORM en .env
# 3. Ejecutar Docker
docker compose up -d
# 4. Ejecutar aplicación
npm run dev:typeorm
```

## Scripts Disponibles

### Desarrollo
- `npm run dev` - Modo desarrollo (detecta DATASOURCE_TYPE automáticamente, por defecto: MEMORY)
- `npm run dev:memory` - Desarrollo con datasource de memoria
- `npm run dev:prisma` - Desarrollo con Prisma 
- `npm run dev:typeorm` - Desarrollo con TypeORM

### Producción
- `npm run start:memory` - Producción con datasource de memoria
- `npm run start:prisma` - Producción con Prisma
- `npm run start:typeorm` - Producción con TypeORM

## Variables de Entorno

Crea un archivo `.env` con las siguientes variables:

```bash
# Puerto de la aplicación
PORT=3000

# Tipo de datasource (MEMORY | PRISMA | TYPEORM)
# Default: MEMORY
DATASOURCE_TYPE=MEMORY

# Solo requerido para PRISMA/TYPEORM
POSTGRES_URL=postgresql://postgres:123456@localhost:5432/TodoDB

# Solo para Docker
POSTGRES_USER=postgres
POSTGRES_DB=TodoDB
POSTGRES_PASSWORD=123456
```

## API Endpoints

### Endpoints Unificados
- Base URL: `/api/todos`
- **Funciona con cualquier datasource** configurado
- Operaciones CRUD estándar

### Endpoints Específicos de Memoria
- Base URL: `/api/todos-memory`
- Operaciones CRUD + funcionalidades adicionales de gestión de datos
- **Siempre usa datasource de memoria**, independiente de la configuración

Para más detalles sobre los endpoints de memoria, consulta [MEMORY_DATASOURCE.md](./MEMORY_DATASOURCE.md)

## Casos de Uso

### 🧠 Memory Datasource (Recomendado para inicio)
- ✅ **Desarrollo rápido** sin configuración de base de datos
- ✅ **Testing** y prototipos instantáneos
- ✅ **Demos** y presentaciones
- ✅ **Aprendizaje** de arquitectura limpia
- ✅ **CI/CD** sin dependencias externas

### 🗄️ Prisma/TypeORM
- ✅ Aplicaciones en producción
- ✅ Persistencia de datos
- ✅ Aplicaciones multi-usuario
- ✅ Transacciones complejas

## Detección Automática de Datasource

La aplicación detecta automáticamente qué datasource usar:

1. **Variable de entorno `DATASOURCE_TYPE`** (prioridad alta)
2. **Script npm específico** (ej: `npm run dev:memory`)
3. **Por defecto**: MEMORY (si no se especifica nada)

### Logs de Inicio
La aplicación muestra claramente qué datasource está usando:

```bash
🔧 Starting application with datasource: MEMORY
🧠 Using memory datasource - no database initialization required
💾 Data will be stored in memory arrays and lost on restart
🔗 Available endpoints: /api/todos-memory
🎯 Datasource configured: MEMORY
```

## Testing

Puedes usar el archivo `memory-datasource.http` para probar la funcionalidad con tu cliente HTTP favorito (REST Client, Postman, etc.)

## Ventajas de esta Arquitectura

1. **🔄 Intercambiable**: Cambia entre datasources sin modificar código de negocio
2. **🚀 Inicio inmediato**: Funciona sin configuración con datasource de memoria
3. **🧪 Testing**: Ideal para pruebas sin dependencias externas
4. **📚 Educativo**: Perfecto para aprender arquitectura limpia
5. **🔧 Flexible**: Cada datasource para su caso de uso específico

## Documentación Adicional

- [Memory Datasource Guide](./MEMORY_DATASOURCE.md) - Guía completa del datasource de memoria
- [memory-datasource.http](./memory-datasource.http) - Ejemplos de peticiones HTTP

## Aplicación de Flashcards

La primera imagen muestra un listado de flashcards para la administración de los usuarios.

![I1](./clean/public/assets/images/I1.jpg)

La segunda imagen es donde se muestra la creación de las flashcards y podemos ver que una flashcard puede tener más de una categoría.

![I2](./clean/public/assets/images/I2.jpg)

En la tercera imagen empezamos a estudiar las flashcards escogiendo una categoría de estudio.

![I3](./clean/public/assets/images/I3.jpg)

En la cuarta imagen empezamos a visualizar las flashcard por la categoría escogida.

![I4](./clean/public/assets/images/I4.jpg)

En la quinta imagen mostramos que al dar vuelta a las flashcards se puede ver la respuesta del concepto.

![I5](./clean/public/assets/images/I5.jpg)

Cada iteración de los usuarios con las flashcards debe quedar almacenada para promover la memoria espaciada.

## 📚 Documentación de la Solución

### 1. Definición del Dominio

Se analizaron las imágenes y se definieron las siguientes entidades principales:

#### Entidad: Flashcard
- **Descripción:** Representa una tarjeta de estudio con pregunta, respuesta, imagen opcional, dificultad y categorías.
- **Atributos:**  
  - `id`: Identificador único  
  - `question`: Pregunta  
  - `answer`: Respuesta  
  - `imageUrl`: Imagen asociada (opcional)  
  - `categoryIds`: Categorías a las que pertenece  
  - `difficultyLevel`: Dificultad (1-5)  
  - `isBasic`: Si es básica  
  - `createdAt`: Fecha de creación  
  - `updatedAt`: Fecha de actualización  
- **Justificación:** Es el núcleo del sistema, modela el contenido que el usuario estudia y gestiona.

#### Entidad: Category
- **Descripción:** Permite organizar las flashcards en grupos y subgrupos.
- **Atributos:**  
  - `id`: Identificador único  
  - `name`: Nombre  
  - `parentId`: Categoría padre (opcional)  
- **Justificación:** Facilita la organización, filtrado y navegación entre tarjetas.

#### Entidad: StudySession
- **Descripción:** Registra cada interacción de estudio de un usuario con una flashcard.
- **Atributos:**  
  - `id`: Identificador único  
  - `userId`: Usuario  
  - `flashcardId`: Flashcard estudiada  
  - `reviewedAt`: Fecha/hora de revisión  
  - `success`: Si la respuesta fue correcta  
  - `nextReview`: Próxima fecha de repaso  
- **Justificación:** Permite implementar memoria espaciada y seguimiento del progreso del usuario.

---

### 2. Rutas REST y Datasource en Memoria

- Se implementó una API REST para la entidad Flashcard con las rutas:
  - `POST /api/flashcards`: Crea una nueva flashcard.
  - `GET /api/flashcards`: Lista todas las flashcards.
- El datasource es un arreglo en memoria (`FlashcardMemoryDatasource`), cumpliendo el requisito de usar un objeto JSON en memoria.

---

### 3. Servicio REST Auxiliar (Arquitectura de 2 capas)

- Se implementó un servicio REST auxiliar con arquitectura mínima de 2 capas:
  - **Capa de presentación:** Archivo `src/presentation/routes/flashcard-aux.routes.ts` (define las rutas `/api/flashcards-aux`).
  - **Capa de lógica de negocio:** Archivo `src/domain/services/flashcard.service.ts` (contiene la lógica para crear y listar flashcards).
- El flujo de datos es:
  1. El controlador recibe la petición.
  2. Llama al servicio, que manipula el datasource en memoria.
  3. Devuelve la respuesta al usuario.

---

### 4. Estructura del Proyecto

```
src/
  domain/
    entities/
      flashcard.entity.ts
      category.entity.ts
      study-session.entity.ts
    services/
      flashcard.service.ts
    repositories/
      flashcard.repository.ts
  infrastructure/
    datasources/
      flashcard-memory.datasource.ts
  presentation/
    routes/
      flashcard.routes.ts
      flashcard-aux.routes.ts
  app.ts
```

---

### 5. Pruebas

- Para probar la API principal:
  - `POST /api/flashcards` con un JSON de flashcard.
  - `GET /api/flashcards` para ver todas.
- Para probar el servicio auxiliar:
  - `POST /api/flashcards-aux`
  - `GET /api/flashcards-aux`

---

### 6. Justificación

- Se siguió la arquitectura limpia, separando entidades, lógica de negocio, acceso a datos y presentación.
- El datasource en memoria permite cumplir el requisito de manipular un objeto JSON.
- El servicio auxiliar demuestra la separación en capas y el flujo correcto de datos.

---
