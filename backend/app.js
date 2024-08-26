const express = require("express");
const cors = require ("cors");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
});


app.get('/usuarios', (req, res) => {
    const status = [
    {Nombre: "Ana", Edad: "20", Pais: "Mexico",},
    { Nombre: "David", Edad: "19", Pais: "Argentina",},
    { Nombre: "Lilian", Edad:"30", Pais: "Chile",},
];

app.get('/usuarios/ocupacion', (req, res) => {
    const ocupation = [
        {Ocupacion: "Enfermera",},
        {Ocupacion: "Estudiante",},
        {Ocupacion: "Comerciante",},
    ]
})
res.send(status);
});