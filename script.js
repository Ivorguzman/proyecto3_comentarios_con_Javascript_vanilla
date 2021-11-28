// datos locales de sugerencias

const empleados = [
    {
        id: 1,
        nombre: "Susan Smith",
        cargoClave: "Desarrolladora web",
        imagen: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        comentarios: " (Susan Smith )Integer molestie sit amet turpis a tempor. Nullam eleifend nunc in posuere pulvinar. In a consectetur mauris. Suspendisse luctus nec tellus in suscipit. Integer molestie condimentum nibh quis efficitur. Integer euismod feugiat rhoncus. Nullam finibus molestie massa, vestibulum porttitor enim aliquet non."
    },
    {
        id: 2,
        nombre: "Anna Johnson",
        cargoClave: "Diseñadora web",
        imagen: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        comentarios: " (Anna Johnson )Integer molestie sit amet turpis a tempor. Nullam eleifend nunc in posuere pulvinar. In a consectetur mauris. Suspendisse luctus nec tellus in suscipit. Integer molestie condimentum nibh quis efficitur. Integer euismod feugiat rhoncus. Nullam finibus molestie massa, vestibulum porttitor enim aliquet non."

    },
    {
        id: 3,
        nombre: "Peter Jones",
        cargoClave: "Expecialista en Interne",
        imagen: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        comentarios: " (Peter Jones )Integer molestie sit amet turpis a tempor. Nullam eleifend nunc in posuere pulvinar. In a consectetur mauris. Suspendisse luctus nec tellus in suscipit. Integer molestie condimentum nibh quis efficitur. Integer euismod feugiat rhoncus. Nullam finibus molestie massa, vestibulum porttitor enim aliquet non."


    },
    {
        id: 4,
        nombre: "bill anderson",
        cargoClave: "CEO",
        imagen: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        comentarios: " (bill anderson) Integer molestie sit amet turpis a tempor. Nullam eleifend nunc in posuere pulvinar. In a consectetur mauris. Suspendisse luctus nec tellus in suscipit. Integer molestie condimentum nibh quis efficitur. Integer euismod feugiat rhoncus. Nullam finibus molestie massa, vestibulum porttitor enim aliquet non."


    },
];
// === Ubicancion en el html de los items === (#id):
const imgHtml = document.getElementById("persona-img")
const trabajadorHtml = document.getElementById("trabajador");
const cargoHtml = document.getElementById("cargo");
const infoHtml = document.getElementById("info");

// === Ubicancion en el html de los items (.class)===

const botonPrevio = document.querySelector(".previo-btn");
const botonProximo = document.querySelector(".proximo-btn");
const botonSorprendeme = document.querySelector("aleatorio-btn");

// indice selecionado en el array
let indiceActual = 0;

//  carga global de inicio
// window.addEventListener("click", () => {
window.addEventListener("DOMContentLoaded", () => {
    const IndiceActualEnArray = empleados[indiceActual];
    imgHtml.src = IndiceActualEnArray.imagen;
    trabajadorHtml.textContent = IndiceActualEnArray.nombre;
    cargoHtml.textContent = IndiceActualEnArray.cargoClave;
    infoHtml.textContent = IndiceActualEnArray.comentarios;
})
// mostrar empleado segun endice del array
function mostrarEmpleado(trabajador) {
    const IndiceActualEnArray = empleados[trabajador];
    imgHtml.src = IndiceActualEnArray.imagen;
    trabajadorHtml.textContent = IndiceActualEnArray.nombre;
    cargoHtml.textContent = IndiceActualEnArray.cargoClave;
    infoHtml.textContent = IndiceActualEnArray.comentarios;
}
// operatividada boton Previo
botonPrevio.addEventListener('click', () => {
    indiceActual -= 1;
    if (indiceActual < 0) {
        indiceActual = empleados.length - 1;
    }
    // console.log(indiceActual)
    mostrarEmpleado(indiceActual);
});

// operatividada boton proximo
botonProximo.addEventListener('click', () => {
    indiceActual += 1;
    if (indiceActual > empleados.length - 1) {
        indiceActual = 0;
    }
    mostrarEmpleado(indiceActual)
    console.log(indiceActual)
});
mostrarEmpleado(indiceActual);




