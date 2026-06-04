class CuentaBancaria {
    #saldo;
    #titular;

    constructor(titular, saldoInicial) {

        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo");
        }

        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    get titular() {
        return this.#titular;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {

        if (monto <= 0) {
            throw new Error("El depósito debe ser mayor que cero");
        }

        this.#saldo += monto;
    }

    retirar(monto) {

        if (monto <= 0) {
            throw new Error("El retiro debe ser mayor que cero");
        }

        if (monto > this.#saldo) {
            throw new Error("Saldo insuficiente");
        }

        this.#saldo -= monto;
    }

    _obtenerSaldo() {
        return this.#saldo;
    }

    _actualizarSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }
}class CuentaAhorros extends CuentaBancaria {

    constructor(titular, saldoInicial, saldoMinimo = 100) {
        super(titular, saldoInicial);
        this.saldoMinimo = saldoMinimo;
    }

    retirar(monto) {

        const saldoActual = this._obtenerSaldo();

        if (saldoActual - monto < this.saldoMinimo) {
            throw new Error(
                "No puede quedar por debajo del saldo mínimo"
            );
        }

        super.retirar(monto);
    }
}class CuentaAhorros extends CuentaBancaria {

    constructor(titular, saldoInicial, saldoMinimo = 100) {
        super(titular, saldoInicial);
        this.saldoMinimo = saldoMinimo;
    }

    retirar(monto) {

        const saldoActual = this._obtenerSaldo();

        if (saldoActual - monto < this.saldoMinimo) {
            throw new Error(
                "No puede quedar por debajo del saldo mínimo"
            );
        }

        super.retirar(monto);
    }
}
class CuentaCorriente extends CuentaBancaria {

    constructor(
        titular,
        saldoInicial,
        limiteSobregiro = 500,
        comision = 10
    ) {

        super(titular, saldoInicial);

        this.limiteSobregiro = limiteSobregiro;
        this.comision = comision;
    }

    retirar(monto) {

        const saldoActual = this._obtenerSaldo();

        if (monto <= saldoActual) {
            super.retirar(monto);
            return;
        }

        const saldoFinal =
            saldoActual - monto - this.comision;

        if (saldoFinal < -this.limiteSobregiro) {
            throw new Error(
                "Se supera el límite de sobregiro"
            );
        }

        this._actualizarSaldo(saldoFinal);
    }
}
module.exports = {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
};