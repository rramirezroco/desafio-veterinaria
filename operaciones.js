const fs = require('fs')

function registrar(nombre, edad, animal, color, enfermedad) {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'))

    data.push({
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad,
    })

    fs.writeFileSync('citas.json', JSON.stringify(data))
    console.log("Cita Registrada")
}

function leer() {
    const data = JSON.parse(fs.readFileSync('citas.json', 'utf8'))

    console.log(data)
}

module.exports = { registrar, leer }