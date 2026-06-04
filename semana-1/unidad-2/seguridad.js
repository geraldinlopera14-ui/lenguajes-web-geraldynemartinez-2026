
function crearSistemaSeguridad() {

    let claveAcceso = "1234"; 


    return {

        validarClave: function(claveIngresada) {
            return claveAcceso === claveIngresada;
        },


        modificarClave: function(nuevaClave) {
            claveAcceso = nuevaClave;
            console.log("¡Clave modificada con éxito!");
        }
    };
}


const miCajaFuerte = crearSistemaSeguridad();

console.log("¿Clave '0000' es correcta?:", miCajaFuerte.validarClave("0000"));

console.log("¿Clave '1234' es correcta?:", miCajaFuerte.validarClave("1234"));

miCajaFuerte.modificarClave("7777");

console.log("¿Todavía funciona la clave '1234'?:", miCajaFuerte.validarClave("1234"));

console.log("¿Funciona la nueva clave '7777'?:", miCajaFuerte.validarClave("7777"));
