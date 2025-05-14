
function crearElemento(tag) {
  let elemento = document.createElement(tag);
  return elemento;
}

function crearElementoConTexto(tag, texto) {
  let elemento = crearElemento(tag);
  elemento.innerHTML = texto;
  return elemento;
}

function crearImagen(src,alt='no especificado'){

    let elemento= crearElemento('img')
    elemento.src=src
    elemento.alt=alt
    return elemento
}

function adicionarElementoAContenedor(elemento,contenedor){

    contenedor.appendChild(elemento)
}

function adicionarElementoABody(nodo){

    document.body.appendChild(nodo)
}