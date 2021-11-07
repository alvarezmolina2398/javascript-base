const nombre = "Jorge";
const apellido = "ALvarez";



//const nombreCompleto = nombre + " "+ apellito;
const nombreCompleto = ` ${nombre} ${apellido} ${1 + 1}`;
console.log( nombreCompleto );


function getSaludo(nombre){
    return `Hola ${nombre} `;
}



console.log(`este es un texto: ${ getSaludo(nombre) }`)