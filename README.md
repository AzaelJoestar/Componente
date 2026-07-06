# Programacion web
## Alumno: Hernandez Uvera Azael.
## profesora: Martinez Nieto Adelina.
## Grupo: 7SD.
---
# Componente - Tarjetas (DinoCard) 🦖

Componente visual reutilizable en JavaScript puro: una tarjeta con imagen que, al pasar el mouse encima, revela información adicional mediante un tooltip animado.

**Problema que resuelve:** cuando quieres mostrar una galería de elementos (productos, personajes, tarjetas de información, etc.) sin saturar la pantalla con texto, necesitas una forma de ocultar los detalles hasta que el usuario muestre interés. DinoCard permite generar tantas tarjetas como quieras, cada una con su propia imagen, título y descripción, sin repetir HTML a mano ni depender de ningún framework.

---

## 🚀 Instalación

Incluye el CSS en el `<head>` y el JS antes de cerrar el `<body>`:

```html
<link rel="stylesheet" href="css/componente.css">
<script src="js/componente.js"></script>
```

---

## 📦 Uso

### `crearDinoCard(imagen, nombre, info)` → `HTMLElement`

Genera dinámicamente una tarjeta (`div.tooltip-card`) con una imagen y un overlay que se muestra al hacer hover, con el nombre e información que le pases como parámetros.

```js
function crearDinoCard(imagen, nombre, info) {
  const card = document.createElement("div");
  card.className = "tooltip-card";

  card.innerHTML = `
    <img src="${imagen}" alt="${nombre}">
    <div class="tooltip-info">
      <h3>${nombre}</h3>
      <p>${info}</p>
    </div>
  `;

  return card;
}
```

Se usa así en tu HTML: creas un contenedor vacío, y le agregas tantas tarjetas como necesites, cada una con contenido distinto:

```html
<div id="contenedor" class="contenedor"></div>
```

```js
const contenedor = document.getElementById("contenedor");

const dinosaurios = [
  {
    img: "img/tiranosaurio.png",
    nombre: "Tiranosaurio Rex",
    info: "Habitaba zonas boscosas. Depredador dominante."
  },
  {
    img: "img/triceratops.png",
    nombre: "Triceratops",
    info: "Herbívoro que vivía en llanuras abiertas."
  }
];

dinosaurios.forEach(d => {
  contenedor.appendChild(
    crearDinoCard(d.img, d.nombre, d.info)
  );
});
```

Como `crearDinoCard` recibe parámetros, puedes reutilizarlo para cualquier contenido:

```js
contenedor.appendChild(
  crearDinoCard("img/logo.png", "Mi Producto", "Descripción de mi producto aquí.")
);
```

---

## 🖼️ Capturas
<img width="1366" height="682" alt="co1" src="https://github.com/user-attachments/assets/b37e962b-a853-4a24-b965-369490011cf4" />
<img width="1366" height="689" alt="co2" src="https://github.com/user-attachments/assets/851caedd-4d5e-4d98-8a65-0f178800baa0" />

---

## 🎥 Video 
https://drive.google.com/file/d/1YRScjIBoJ0KFNtQd4pVVNHIbOT5kARzB/view?usp=drive_link
