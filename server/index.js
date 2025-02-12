const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos simulados
let students = [
    {
        name: "Juan Pérez",
        id: "12693744D",
        grades: [
            { subject: "Matemáticas", grade: 9 }, 
            { subject: "Lengua", grade: 7 },
            { subject: "Historia", grade: 8.5 },
            { subject: "Dibujo Técnico", grade: 5 },
            { subject: "BlibBlab", grade: 2 },
            { subject: "Dibujo Artistico", grade: 5 },
        ],
        pcId: 101
    },
    {
        name: "María López",
        id: "65920289S",
        grades: [
            { subject: "Historia", grade: 8.5 },
            { subject: "Dibujo Técnico", grade: 5 }
        ],
    }
];

let pcs = [
    { id: 101, studentId: 1 },
    { id: 102, studentId: 2 }
];

// Rutas API
app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/pcs", (req, res) => {
    res.json(pcs);
});

// Servidor en puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});