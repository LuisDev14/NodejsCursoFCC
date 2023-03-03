//Convertir de string a JSON y viceversa con stringify y parse
let infoCurso = {
    "titulo":"Aprende Node.js",
    "numVistas":45642,
    "numLikes":21123,
    "temas":["JavaScript","Node.js"],
    "esPublico":true
}
console.log(infoCurso);
console.log(typeof infoCurso);
console.log("--------------------------");
//objeto -> cadena de caraacteres
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log("--------------------------");
//Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);
console.log(infoCursoObjeto);