function login(u,p){
    if(u == "admin" && p == "1234"){
        alert("Bienvenido")
    }else{
        alert("ERROR")
    }
}

var user = prompt("Ingrese su usuario")
var pass = prompt("Ingrese su contraseña")

login(user,pass)