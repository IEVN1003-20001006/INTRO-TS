interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:50,
    segundo:10,
    cancion:"",
    detalles:{
        autor:"paty cantu",
        year:2014
    }


}

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundo son: ${reproductor.segundo}`);
console.log(`La cancion es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`el año es: ${reproductor.detalles.year}`);

const{volumen,segundo, cancion,detalles}=reproductor;
const{autor,year}=detalles;

console.log(`el volumen actual es: ${volumen}`)
console.log(`los segundos son: ${segundo}`)
console.log(`la cancion es: ${cancion}`)
console.log(`la cantante es: ${autor}`)
console.log(`el año es: ${year}`)

const dbz:string[]=['Goku', 'Majimbu','Babidy', 'Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);
const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 1 ${b}`);

