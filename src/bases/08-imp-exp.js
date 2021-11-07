//impot
import heroes, {owners} from '../data/heroes';


const getHeroeById = (id) => heroes.find(element => element.id === id);
console.log(getHeroeById(2));

//Find? no sirve filter
const getHeroeByOwner = ( owner ) =>  heroes.filter(element => element.owner === owner);
console.log(getHeroeByOwner('DC'));

console.log(owners)