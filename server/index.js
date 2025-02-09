const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos simulados
let students = [
    {
        id: 1,
        name: "Juan Pérez",
        grades: { subject: "Matemáticas", grade: 90 },
        pc: { id: 101 }
    },
    {
        id: 2,
        name: "María López",
        grades: { subject: "Historia", grade: 85 },
        pc: { id: 102 }
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