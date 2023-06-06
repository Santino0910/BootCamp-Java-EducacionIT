const datos = [
    ["Plan 001", 150000, 30, 15],
    ["Plan 002", 300000, 180, 10],
    ["Plan 003", 485000, 60, 23]
]

var datosinteres = datos


function calcinteres(){
    for(var i = 0; i < datos.length; i++){
        var int = datos[i][1] * datos[i][2] * datos[i][3]
        var interes = int / 100
        datosinteres[i].push(interes)
    }
}

console.log("Tabla con intereses")
console.log(datosinteres)

calcinteres()