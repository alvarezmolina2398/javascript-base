//Funciones en Javascript
// const saludar = function(nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// }

//uso de landa
const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;



const getUser = () =>
({
    uId: 'ABC1234',
    username: 'El_Papi1502'
})


const user = getUser();


console.log(saludar3('Jorge'));
console.log(saludar4());
console.log(user);



//Tarea 
//1 Transformar en funcion flecha
//2. Tiene que retornar un objeto implicito
//3 probar
// function getUsuarioActivo(nombre) {
//     return {
//         uId: 'ABC567',
//         username: nombre
//     }
// }



const getUsuarioActivo = (nombre) => ({
    uId: 'ABC567',
    username: nombre
});



const usuarioActivo = getUsuarioActivo('Jorge');


console.log(usuarioActivo);