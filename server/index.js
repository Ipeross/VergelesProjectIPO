const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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
        pcId: 102
    },
    {
        name: "Carlos García",
        id: "78521099X",
        grades: [
            { subject: "Matemáticas", grade: 6 },
            { subject: "Lengua", grade: 5.5 },
            { subject: "Ciencias", grade: 7 },
            { subject: "Inglés", grade: 6.5 },
            { subject: "Física", grade: 4.5 }
        ],
        pcId: 103
    },
    {
        name: "Ana Sánchez",
        id: "31245873M",
        grades: [
            { subject: "Geografía", grade: 7 },
            { subject: "Filosofía", grade: 9 },
            { subject: "Historia", grade: 8 },
            { subject: "Lengua", grade: 6 }
        ],
        pcId: 104
    },
    {
        name: "Pedro Martínez",
        id: "98765432B",
        grades: [
            { subject: "Escenicas", grade: 12 },
            { subject: "Matemáticas", grade: 7 },
            { subject: "Física", grade: 8 },
            { subject: "Química", grade: 6 },
            { subject: "Biología", grade: 5.5 },
            { subject: "Geografía", grade: 6 },
            { subject: "Inglés", grade: 8 }
        ],
        pcId: 105
    },
    {
        name: "Luis Fernández",
        id: "45678901Y",
        grades: [
            { subject: "Matemáticas", grade: 9 },
            { subject: "Lengua", grade: 7.5 },
            { subject: "Historia", grade: 8 },
            { subject: "Filosofía", grade: 6.5 },
            { subject: "Educación Física", grade: 10 }
        ],
        pcId: 106
    },
    {
        name: "Sofía Pérez",
        id: "13579246T",
        grades: [
            { subject: "Matemáticas", grade: 7 },
            { subject: "Lengua", grade: 8 },
            { subject: "Ciencias", grade: 6 },
            { subject: "Inglés", grade: 9 }
        ],
        pcId: 107
    },
    {
        name: "Gabriel Romero",
        id: "22446688A",
        grades: [
            { subject: "asdasdasdasdasdasdasdasdasdasdasdasd", grade: 9 },
            { subject: "Historia", grade: 6 },
            { subject: "Lengua", grade: 7 },
            { subject: "Ciencias", grade: 8 }
        ],
        pcId: 108
    },
    {
        name: "Isabel Martínez",
        id: "11223344C",
        grades: [
            { subject: "Geografía", grade: 6 },
            { subject: "Filosofía", grade: 5.5 },
            { subject: "Historia", grade: 7 },
            { subject: "Lengua", grade: 8 }
        ],
        pcId: 109
    },
    {
        name: "Eduardo Díaz",
        id: "55667788P",
        grades: [
            { subject: "Matemáticas", grade: 5 },
            { subject: "Historia", grade: 6.5 },
            { subject: "Física", grade: 7.5 },
            { subject: "Química", grade: 9 },
            { subject: "Geografía", grade: 8 }
        ],
        pcId: 110
    },
    {
        name: "Verónica López",
        id: "99887766D",
        grades: [
            { subject: "Inglés", grade: 7 },
            { subject: "Lengua", grade: 9 },
            { subject: "Matemáticas", grade: 6 },
            { subject: "Filosofía", grade: 8.5 }
        ],
        pcId: 111
    },
    {
        name: "Raúl Sánchez",
        id: "22334455K",
        grades: [
            { subject: "Química", grade: 9 },
            { subject: "Matemáticas", grade: 7.5 },
            { subject: "Historia", grade: 6 },
            { subject: "Geografía", grade: 7 }
        ],
        pcId: 112
    }
];

let pcs = [
    { id: 101, studentId: 1 },
    { id: 102, studentId: 2 },
    { id: 103, studentId: 3 },
    { id: 104, studentId: 4 },
    { id: 105, studentId: 5 },
    { id: 106, studentId: 6 },
    { id: 107, studentId: 7 },
    { id: 108, studentId: 8 },
    { id: 109, studentId: 9 },
    { id: 110, studentId: 10 },
    { id: 111, studentId: 11 },
    { id: 112, studentId: 12 }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/pcs", (req, res) => {
    res.json(pcs);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});