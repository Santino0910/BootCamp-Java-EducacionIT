function calporc(total2){
    var total = total2
    var gastos_n = total / 100 * 50
    var gastos_o = total / 100 * 30
    var ahorro = total / 100 * 20

    alert("Gastos necesarios: "+ gastos_n + " \nGastos opcionales: " + gastos_o + " \nAhorro o inversion: " + ahorro)
}

var total = prompt("Ingrese el ingreso total")
calporc(total)
