var datos = [
    ["Plan 001", 150000, 30, 15],
    ["Plan 002", 300000, 180, 10],
    ["Plan 003", 485000, 60, 23]
]




function calcinteres(){

    for(var i = 0; i < datos.length; i++){
        var int = datos[i][1] * datos[i][2] * datos[i][3]
        var interes = int / 100
        console.log("El interes generado por el plan " + datos[i][0] + " es de $" + interes)
        datos[i].push(interes)
    }
}

calcinteres()
alert("Intereses ya generados, chequear en la consola")
console.log(datos)
