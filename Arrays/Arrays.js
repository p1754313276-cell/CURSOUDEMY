var permitido = "Usuario permitido"
var miFuncion = acceso => acceso
var persona = {
    nombre : "Pepe",
    miAutomovil : [
        {
            pintura : {
                marca : "Marca",
                precio : 20000,
                color : "Verde"
            }
        },
        {
            vendedor : {
                nombre : "Ciapfa",
                edad : 2,
                ayudante : {
                    nombre : "Julio"
                }
            }
        }
    ]
}

var miArray = ["Ciapfa", 2020, 34.9, true, ["Otro Array", "Array", 7900], miFuncion(permitido), persona]

console.log(miArray[6].miAutomovil[1].vendedor.ayudante.nombre)