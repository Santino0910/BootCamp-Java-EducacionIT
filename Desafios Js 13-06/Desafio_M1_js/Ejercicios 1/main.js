function obtenerDatos(){
    alert("A continuacion le pediremos unos datos")
    var cf = prompt("Ingrese los costos fijos")
    var pv = prompt("Ingrese el precio de venta")
    var cv = prompt("Ingrese costos variables")
    operacion(cf,pv,cv)
}

function operacion(cf,pv,cv){
    var resultado = pv - cv
    resultado = cf / resultado
    alert(resultado)
}

obtenerDatos()