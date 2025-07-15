# Sistema de Gestión de Donaciones

## Descripción

Sistema de gestión de donaciones que permite manejar donaciones, donantes y receptores en tiempo real usando WebSocket.

## Requisitos

- Node.js v18 LTS o superior
- npm o yarn
- SQLite
- Postman v10+ o Insomnia 2023+ con soporte WebSocket

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar la aplicación:
```bash
npm run start:dev
```

## Entidades

### Donaciones
- ID (autogenerado)
- Nombre del producto
- Descripción
- Cantidad
- Fecha
- Estado

### Donantes
- ID (autogenerado)
- Nombre
- Email
- Teléfono
- Estado

### Receptores
- ID (autogenerado)
- Nombre
- Email
- Teléfono
- Dirección
- Estado

## Ejemplos de Mensajes WebSocket

### Donaciones
```json
// Crear donación
{
  "event": "createDonacion",
  "data": {
    "nombreProducto": "Laptop",
    "descripcion": "Laptop usada en buen estado",
    "cantidad": 1,
    "fecha": "2025-07-14T22:00:00.000Z",
    "estado": "pendiente"
  }
}

// Listar donaciones
{
  "event": "findDonaciones"
}

// Actualizar donación
{
  "event": "updateDonacion",
  "data": {
    "id": 1,
    "estado": "entregado"
  }
}

// Eliminar donación
{
  "event": "removeDonacion",
  "data": {
    "id": 1
  }
}
```

### Donantes
```json
// Crear donante
{
  "event": "createDonante",
  "data": {
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "telefono": "555-1234",
    "estado": "activo"
  }
}

// Listar donantes
{
  "event": "findDonantes"
}

// Actualizar donante
{
  "event": "updateDonante",
  "data": {
    "id": 1,
    "estado": "inactivo"
  }
}

// Eliminar donante
{
  "event": "removeDonante",
  "data": {
    "id": 1
  }
}
```

### Receptores
```json
// Crear receptor
{
  "event": "createReceptor",
  "data": {
    "nombre": "Centro Comunitario",
    "email": "centro@ejemplo.com",
    "telefono": "555-5678",
    "direccion": "Calle 123",
    "estado": "activo"
  }
}

// Listar receptores
{
  "event": "findReceptores"
}

// Actualizar receptor
{
  "event": "updateReceptor",
  "data": {
    "id": 1,
    "estado": "inactivo"
  }
}

// Eliminar receptor
{
  "event": "removeReceptor",
  "data": {
    "id": 1
  }
}
```

## Eventos Emitidos

Cada operación que modifica datos emitirá un evento a todos los clientes conectados:
- `donacionCreated`: Cuando se crea una nueva donación
- `donacionUpdated`: Cuando se actualiza una donación
- `donacionRemoved`: Cuando se elimina una donación
- `donanteCreated`: Cuando se crea un nuevo donante
- `donanteUpdated`: Cuando se actualiza un donante
- `donanteRemoved`: Cuando se elimina un donante
- `receptorCreated`: Cuando se crea un nuevo receptor
- `receptorUpdated`: Cuando se actualiza un receptor
- `receptorRemoved`: Cuando se elimina un receptor

## Consideraciones

- La base de datos SQLite se crea automáticamente en `app.db`
- Las fechas deben ser enviadas en formato ISO
- Los eventos son únicos para cada entidad para evitar colisiones
- La validación de datos se realiza automáticamente usando class-validator
