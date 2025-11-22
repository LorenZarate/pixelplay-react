# PixelPlay — Tienda de Juegos Indie

PixelPlay es una aplicación web desarrollada con **React + Vite**, que simula una tienda digital de videojuegos indie.  
Incluye catálogo, favoritos, carrito persistente, vista de detalles, filtros avanzados y navegación completa.

Proyecto realizado por **Grupo Pixel Play** para la asignatura *Prácticas Profesionalizantes*.

**Integrantes** 
**Bugnoni Agustin** 
**Herrera Samuel** 
**Insua Juan Ignacio** 
**Mercado Emanuel** 
**Zarate Lorenzo** 

---

## Demo Online  
https://lorenzarate.github.io/pixelplay-react/

---

##  Repositorio  
https://github.com/LorenZarate

---

# Funcionalidades Principales

### Catálogo de Juegos Indie  
Listado obtenido desde **CheapShark API**.  
Cada juego muestra:

- Imagen  
- Título  
- Preci 
- Botón **Agregar al Carrito**  
- Botón **Agregar a Favoritos**  
- Link **Ver Detalles**

---

### Filtro por Precio  
El usuario puede:

1. Escribir un precio máximo  
2. Presionar **Aplicar filtro**  
3. La lista se actualiza con juegos cuyo precio ≤ precio ingresado  
4. Botón **Limpiar filtro**

---

### Carrito con Persistencia  
Implementado con **Context API + LocalStorage**.

Funcionalidades:

- Agregar un juego  
- Eliminar un juego  
- Vaciar todo el carrito  
- Total actualizado automáticamente  
- Contador dinámico en la barra de navegación  

---

### Sistema de Favoritos  
Permite guardar o remover juegos preferidos.  
Datos persistentes entre sesiones mediante LocalStorage.

---

### Vista de Detalle por Juego  
Información obtenida de dos APIs combinadas:

🟦 **Steam Store API (via AllOrigins Proxy)**  
🟧 **CheapShark API**

Datos mostrados:

- Título  
- Imagen principal  
- Precio  
- Descripción  
- Géneros  
- Tags  
- Desarrollador / Publisher  
- Fecha de lanzamiento  
- Metacritic Score  

---

### Vista 404 (Página no encontrada)
Si el usuario accede a una ruta inexistente, se muestra una página con:

- Error “404”  
- Mensaje informativo  
- Botón para volver al inicio  

---

### Navegación con HashRouter  
Para garantizar compatibilidad con **GitHub Pages**

---

🛠️ Tecnologías Utilizadas

React 18

Vite

React Router DOM + HashRouter

Bootstrap 5

CheapShark API

Steam Store API + AllOrigins

Context API

LocalStorage

GitHub Pages

---

### Ejecucion local

1) clonar repositorio de github

git clone https://github.com/usuario/pixelplay.git
cd pixelplay

2) instalar dependencias
requiere Node.js
npm install

3) Ejecutar en modo desarrollo
npm run dev

Se abrirá en:
http://localhost:5173


### Posibles Mejoras Futuras

- Checkout real con pagos
- Login y cuentas de usuario
- Lista de deseos
- Más filtros (género, calificación, ofertas)
- Reviews de usuarios
- Modo oscuro/tema dinámico
