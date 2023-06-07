import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.js'
import * as Popper from '../node_modules/@popperjs/core/dist/umd/popper.js'

const formdatos = document.getElementById('datos')

formdatos.addEventListener('submit',event => {
    event.preventDefault()
    event.stopPropagation()
    let form = event.target
    if(form.checkValidity()){
        let total = Number(datos[0].value)
        let porcentaje_gastos_n = Number(datos[1].value)
        let porcentaje_gastos_o = Number(datos[2].value)
        let porcentaje_ahorro = Number(datos[3].value)
        calporc(total,porcentaje_gastos_n,porcentaje_gastos_o,porcentaje_ahorro)

        
        
    }else if(!form.checkValidity()){
        alert("error")
    }
})



function calporc(total2,p1,p2,p3){
    console.log(p1,p2,p3)
    var total = total2
    var gastos_n = total / 100 * p1
    var gastos_o = total / 100 * p2
    var ahorro = total / 100 * p3

    alert("Gastos necesarios: "+ gastos_n + " \nGastos opcionales: " + gastos_o + " \nAhorro o inversion: " + ahorro)
}

