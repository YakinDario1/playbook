// Ejemplo 7: Usu de filter para una lista de elementos
const countries = [
    "España",
    "Francia",
    "Alemania",
    "Inglaterra",
    "Italia",
    "Portugal",
    "Rusia",
    "China",
    "Japón",
    "Australia",
];
const filterCountries = countries.filter((country) => country.includes("lia"));
console.log("Ejemplo 7: Uso de filter para una lista de elementos");
console.log(filterCountries);

const filterCountries2 = countries.filter((country) => country.includes("ina"));
console.log("Ejemplo 7: paises que termina por 'ina'");
console.log(filterCountries2);
