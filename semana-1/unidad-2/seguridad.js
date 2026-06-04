function crearSistemaSeguridad(claveInicial) {
  let _clave = claveInicial;

  return {
    validarClave: (intento) => intento === _clave,
    cambiarClave: (vieja, nueva) => {
      if (vieja === _clave) {
        _clave = nueva;
        return true;
      }
      return false;
    }
  };
}

const sistema = crearSistemaSeguridad("1234");
console.log("Validación inicial:", sistema.validarClave("1234"));