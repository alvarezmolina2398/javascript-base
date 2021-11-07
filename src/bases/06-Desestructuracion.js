//Desestructuracion
const persona = {
    nombre : "Tony",
    edad: 45,
    clave : 'IronMan',
    // rango: 'Soldado'
};






// console.log(persona.nombre);
// console.log(persona.clave);
// console.log(persona.edad);


const Context = ({nombre,edad,rango = 'Capitan',clave}) => {
    // const  {nombre,edad,clave} = usuario;

    // console.log(nombre,clave,edad)
    // console.log(nombre,edad,rango)
    return {
        nombreClave :  clave,
        anios: edad,
        latLng: {
            lat: 123123123,
            lot: 2313123123
        }
    }

}

const {nombreClave,anios,latLng:{lat, lng}} =  Context(persona);
console.log(nombreClave,anios);

console.log(lat, lng);