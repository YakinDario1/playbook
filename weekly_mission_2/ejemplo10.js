// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista ,si todo cumple con la validacion que indiques te regresa true, de los contrario false

const names = ["Juan", "Pedro", "Maria", "Luis", "Jorge"];
const areaAll = names.every((names) => typeof names === "string");
console.log("Ejemplo 10: son todos los nombres string: ", areaAll);
