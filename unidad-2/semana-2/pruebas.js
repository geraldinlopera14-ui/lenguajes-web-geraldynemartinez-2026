const {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
} = require("./finanzas");

console.log("=== Cuenta Bancaria ===");

const cuenta1 =
    new CuentaBancaria("Juan", 1000);

cuenta1.depositar(500);

console.log(cuenta1.saldo);

cuenta1.retirar(200);

console.log(cuenta1.saldo);

console.log("\n=== Cuenta Ahorros ===");

const ahorro =
    new CuentaAhorros("María", 1000, 300);

try {

    ahorro.retirar(800);

} catch (error) {

    console.log(error.message);

}

console.log(ahorro.saldo);

console.log("\n=== Cuenta Corriente ===");

const corriente =
    new CuentaCorriente(
        "Carlos",
        500,
        1000,
        20
    );

corriente.retirar(800);

console.log(corriente.saldo);

try {

    corriente.retirar(1000);

} catch (error) {

    console.log(error.message);

}