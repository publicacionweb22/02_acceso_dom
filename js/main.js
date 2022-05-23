// Métodos y propiedades de acceso al DOM con JavaScript

// El DOM es un árbol que usa el navegador para, en cada nodo de ese arbol, asociar un elemento HTML con
// un objeto JavaScript con propiedades y métodos para poder modificar ese elemento de forma
// programática

// ACCESO A ELEMENTOS DEL DOM

// Tenemos un primer método de acceso getElementById() // El más usado

var title = document.getElementById('title');

console.log(title);

// Tenemos otro método de acceso mediante el nombre de la etiqueta getElementsByTagName()

var buttons = document.getElementsByTagName('button'); // Aquí recupero o enlazo todos los elementos button

console.log(buttons); // Array de elementos
console.log(buttons[0]); // Con esto accedo al primer botón

// También disponemos de un selector por la clase CSS getElementsByClassName()

var instructionsParagraphs = document.getElementsByClassName('instructions');

console.log(instructionsParagraphs);

// Y finalmente tenemos los métodos selectores querySelector() y querySelectorAll()

var dinamicLink = document.querySelector('.dinamic-link');

console.log(dinamicLink);

var jumboItems = document.querySelectorAll('.jumbo li');

console.log(jumboItems);

// MODIFICACIÓN DE ELEMENTOS DEL DOM

// El acceso a los elementos del DOM nos permite su modificación mediante una serie de propiedades y métodos

// Por ejemplo, podemos modificar su contenido

title.innerHTML = 'Otro título';

// Por ejemplo, también hay propiedades para implementar atributos que permitan cierta lógica

buttons[1].disabled = true;

// También podemos desde JS implementar estilos CSS

instructionsParagraphs[0].style.color = 'crimson';

// Podemos por ejemplo añadir atributos con valores

dinamicLink.setAttribute('href','https://google.com');

// Podemos por ejemplo renderizar un conjunto de datos

var brands = ['Apple','Xiami','Samsung']; 

for (i=0;i < brands.length; i++) {
    jumboItems[i].innerHTML = brands[i];
}

// CREACIÓN DE ELEMENTOS EN EL DOM

// Desde JavaScript también podemos añadir elementos en el DOM

// El proceso de añadir elementos comienza por su creación

var item = document.createElement('li'); // Se genera en memoria el elemento

// EL siguiente paso es añadir contenido a ese elemento

item.innerHTML = 'Asus';

// Y el siguiente paso es añadir el elemento a otro existente

var jumboList = document.querySelector('.jumbo');

jumboList.appendChild(item);

// EVENTOS EN EL DOM

var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');

// 1ª Forma es mediante funciones asociadas
// a atributos de elementos

function toggleModal() {
    if (modal.style.display === 'none') {
        modal.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// 2ª Forma es mediante la adición de listener
// o escuchadores a los elementos

var input = document.querySelector('input');

input.addEventListener('input', () => {
    buttons[1].disabled = false;
})

// Cuando necesitamos manipular elementos en JavaScript
// respecto a sus estilos en CSS lo habitual es añadir y quitar clases

jumboList.addEventListener('click', () => {
    jumboList.classList.toggle('marked'); // Añade la clase al elemento si no la tiene y la elimina si la tiene
})