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