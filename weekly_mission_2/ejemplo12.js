// Ejemplo 12 : Uso de find en una lista de objetos
const scores = [
    { name: "Juan", score: 10 },
    { name: "Pedro", score: 5 },
    { name: "Maria", score: 20 },
];
const score = scores.find((score) => score.score >= 10);
console.log("Ejemplo 12: El primer score mayor a 10 es: ", score);
