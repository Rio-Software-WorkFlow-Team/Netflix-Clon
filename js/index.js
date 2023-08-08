import { urls } from '/js/modules/urls.js'
import { options  } from '/js/modules/options.js';
import { loadData } from '/js/modules/peticion.js'
  
const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


// window.addEventListener('DOMContentLoaded',()=>{
//     const peticiones = urls.map(peticion=>fetch(peticion));
//     Promise.all(peticiones).then(values=>{
//         return Promise.all(values.map(r=>r.json()))
//     }).then(catologos=>{
//         const [catalogoUno,catalogoDos,catalogoTres] = catologos;
//         // Catalogo uno
//         const populares = document.getElementById('populares');
//         catalogoUno.results.forEach(pelicula => {
//             const article = document.createElement('article');
//             article.classList.add('pelicula');
//             const img = document.createElement('img');
//             img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
//             article.append(img);
//             populares.append(article);
//         });
//         // Catalogo dos
//         const estrenos = document.getElementById('estreno');
//         catalogoDos.results.forEach(pelicula => {
//             const article = document.createElement('article');
//             article.classList.add('pelicula');
//             const img = document.createElement('img');
//             img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
//             article.append(img);
//             estrenos.append(article);
//         });
//         // Catalogo tres
//         const vistas = document.getElementById('vistas');
//         catalogoTres.results.forEach(pelicula => {
//             const article = document.createElement('article');
//             article.classList.add('pelicula');
//             const img = document.createElement('img');
//             img.src = 'https://image.tmdb.org/t/p/original/'+pelicula.poster_path;
//             article.append(img);
//             vistas.append(article);
//         });
//     });
// });