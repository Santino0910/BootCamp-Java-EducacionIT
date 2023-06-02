function verificar(edad){
    if(edad > 17){
        alert("Bienvenido")
    } else if(edad <= 17){
        alert("Error")
    } else{
        alert("Ingrese una edad valida")
    }
}
var edad = prompt("Ingrese tu edad")
verificar(edad)