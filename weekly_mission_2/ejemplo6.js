//Ejemplo 6: uso de map para convertir todos los nombres de una lista a mayusculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const contriesFirstThreeLetter = countries.map((country)=> country.toUpperCase().slice(0,3));
console.log(contriesFirstThreeLetter);

