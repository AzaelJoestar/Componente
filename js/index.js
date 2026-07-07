
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
    },
    {
      img: "img/velociraptor.png",
      nombre: "Velociraptor",
      info: "Cazador ágil que se movía en manadas."
    },
    {
      img: "img/dilophosaurio.png",
      nombre: "Dilophosaurus",
      info: "Habitaba zonas húmedas, conocido por su veneno."
    }
  ];

  dinosaurios.forEach(d => {
    contenedor.appendChild(
      crearDinoCard(d.img, d.nombre, d.info)
    );
  });
