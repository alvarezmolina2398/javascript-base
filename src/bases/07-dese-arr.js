//Desestructuracion de Arreglos
const personajes = ['Goku', 'Vegeta', 'Trunck'];


// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
const [p1, p2, p3] = personajes;
console.log(p1, p2, p3);


const retornaArreglo = () => {
    return ['ABC', 123]
}


const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);


//Tarea
//1/ pos primer valor llamara nom,bre
//2. val setNombre
const usarState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre,SetNombre] = usarState('Goku');
console.log(nombre);
SetNombre();