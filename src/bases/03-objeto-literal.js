const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'Nueva Santa Rosa',
        zip: 6014,
        lat: 14.3232,
        lng: 34.9233321,
    }

};




const persona2 =  {...persona};
persona2.nombre = 'Peter';



console.log( persona );
console.log(persona2);

