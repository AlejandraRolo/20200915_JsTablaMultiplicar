let tablamul = 50;
let iteracion = 10;
const contededor = document.getElementById("contenedor");

let etiquetatitulo = document.createElement("h1");
    etiquetatitulo.textContent = "Tabla de Multiplicar del " + tablamul;
    etiquetatitulo.classList.add('border-inferior');
    contededor.appendChild(etiquetatitulo);

for(let i=0; i<=iteracion; i++){
    let etiquetatabla = document.createElement("h2");
    etiquetatabla.textContent = tablamul + " X " + i + " = " + tablamul * i;
    etiquetatabla.classList.add('my-2');
    etiquetatabla.classList.add('contenido');
    contededor.appendChild(etiquetatabla);
}

