// Ejemplo 16: Ordenar un lista de objetos

const users = [
    { name: "Pedro", age: 30 },
    { name: "Juan", age: 20 },
    { name: "John", age: 17 },
    { name: "Maria", age: 40 },
];
users.sort((a, b) => {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
});

console.log("Ejemplo 16: Ordenar una lista de objetos por edad: ");
console.log(users);
