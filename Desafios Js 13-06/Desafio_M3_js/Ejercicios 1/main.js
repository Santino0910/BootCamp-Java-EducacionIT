const datos = [
    ["Enero", 1500, 1500],
    ["Febrero", 2500, 2500],
    ["Marzo", 84683, 1155],
    ["Abril", 135353, 1533],
    ["Mayo", 1535, 5434],
    ["Junio", 4343354, 5434543],
    ["Julio", 435453, 4543],
    ["Agosto", 78351, 7816],
    ["Septiembre", 1878, 95634],
    ["Octubre", 48483, 9433],
    ["Noviembre", 35483, 53133],
    ["Diciembre", 3843, 348133]
  ];
function flujomensual(){

    var total = 0;
    
    for(var i = 0; i < datos.length; i++){
        var resultado = datos[i][1] - datos[i][2]
        total = resultado + total
        if(resultado > 0){
            console.log("en el mes "+ datos[i][0] + " hubo ganancia y fue de $" + resultado)
        } else if(resultado < 0){
            console.log("en el mes "+ datos[i][0] + " hubo perdidas y fueron de $" + resultado)
        } else{
            console.log("en el mes "+ datos[i][0] + " no hubo perdidas ni ganancias $" + resultado)
        }
  }
  flujoanual(total)
}



function flujoanual(total){
    if(total > 0){
        console.log("La ganancia del año fue de: "+ total)
        alert("La ganancia del año fue de: "+ total + "\n en la consola podras ver el detalle mes por mes")
    } else if(total < 0){
        alert("La perdida del año fue de: "+ total + "\n en la consola podras ver el detalle mes por mes")
        console.log("La perdida del año fue de: "+ total )
    }
}

flujomensual()


