var acceso = true

/*var accesoU = function(a){
    return a
}*/

//var accesoU = a => a //retorna un valor
//var accesoU = () => false //no pasamo parametros a nuestra funcion y retornamos un valor
//var accesoU = (a,n) => console.log(`Usuario ${n} Acceso ${a}`) //Cuando pasamos mas de un parametro

var accesoU = (a,nombre) => {
    console.log(`Usuario ${nombre} en ejecución`)
    return a
}

accesoU(acceso,"Ciapfa") == true
? console.log("Usuario permitido")
: console.log("Usuario denegado")