import { options } from '/js/modules/options.js';

// const loadData = async (containerId) => {
//     try {
//       const response = await axios.request(options);
//       const dataContainer = document.getElementById(containerId);
  
//       response.data.results.forEach((pelicula) => {
//         const card = document.createElement("div");
//         card.classList.add("card");
  
//         const title = pelicula.originalTitleText?.text ||  "Título no disponible";
//         const image = pelicula.primaryImage?.url || "/assets/img/imagen_default.png";
//         const releaseYear = pelicula.releaseYear?.year || "Año de lanzamiento desconocido";
  
//         // <h3>${title}</h3>
//         // <p>Año de lanzamiento: ${releaseYear}</p>
//         card.innerHTML = `
//         <img src="${image}" alt="${title}" />
//         `;
  
//         dataContainer.appendChild(card);
//       });
//     } catch (error) {
//       console.error("HUBO UN ERROR EN LA PETICION:", error);
//     } finally {
//       console.log("YA SE ACABO EL PROCESAMIENTO DE DATOS");
//     }
//   };
  
// loadData("populares");
// loadData("estreno");
// loadData("vistas");

const loadData = async (containerId) => {
  try {
    const response = await axios.request(options);
    const dataContainer = document.getElementById(containerId);

    response.data.results.forEach((pelicula) => {
      const card = document.createElement("div");
      card.classList.add("pelicula");

      const title = pelicula.originalTitleText?.text ||  "Título no disponible";
      const image = pelicula.primaryImage?.url || "/assets/img/imagen_default.png";
      const releaseYear = pelicula.releaseYear?.year || "Año de lanzamiento desconocido";

      // <h3>${title}</h3>
      // <p>Año de lanzamiento: ${releaseYear}</p>
      card.innerHTML = `
      <a href="#"><img src="${image}" alt="${title}"></a>
      `;

      dataContainer.appendChild(card);
    });
  } catch (error) {
    console.error("HUBO UN ERROR EN LA PETICION:", error);
  } finally {
    console.log("YA SE ACABO EL PROCESAMIENTO DE DATOS");
  }
};

// loadData("populares");
// loadData("estreno");
loadData("vistas");
// loadData("carousel");

export { loadData }