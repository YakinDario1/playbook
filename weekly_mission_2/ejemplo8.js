//Ejemplo Filtrar una lista por condiciones

const scores = [
    { name: "A", score: 95 },
    { name: "B", score: 85 },
    { name: "C", score: 75 },
    { name: "D", score: 99 },
    { name: "E", score: 100 },
];

const filterScores = scores.filter((scores) => scores.score >= 85);
console.log("Ejemplo: Filtrado elemento de score");
console.log(filterScores);
