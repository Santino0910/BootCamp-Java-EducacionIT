import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.js'
import * as Popper from '../node_modules/@popperjs/core/dist/umd/popper.js'

const formdatos = document.getElementById('datos')

formdatos.addEventListener('submit',event => {
    event.preventDefault()
    event.stopPropagation()
    let form = event.target
    if(form.checkValidity()){
        var cf = datos[0].value
        var pv = datos[1].value
        var cv = datos[2].value
        operacion(Number(cf),Number(pv),Number(cv))
        
    }else if(!form.checkValidity()){
        alert("error")
    }
})


function operacion(cf,pv,cv){
    var resultado = pv - cv
    resultado = cf / resultado
    alert(resultado)
}

