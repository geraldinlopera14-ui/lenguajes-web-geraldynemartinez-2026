# Reflexión sobre el Diseño del Sistema de Finanzas Personales

## 1. Análisis de Paradigmas

El enfoque basado en clases resulta apropiado para este dominio porque permite representar entidades del mundo real como cuentas bancarias, cuentas de ahorro y cuentas corrientes mediante mecanismos de encapsulamiento, herencia y reutilización de código.

En un enfoque funcional, cada operación debería implementarse mediante funciones independientes que reciben y devuelven estados, lo que puede aumentar la complejidad cuando existen múltiples tipos de cuentas con reglas de negocio diferentes.

El uso de objetos literales puede ser adecuado para sistemas pequeños, pero dificulta la reutilización y extensión del comportamiento cuando se requiere incorporar nuevos productos financieros.

Por estas razones, la programación orientada a objetos ofrece una estructura más mantenible y escalable para este problema.

## 2. Seguridad de Datos

Los miembros privados son fundamentales para garantizar la integridad financiera del sistema.

Al utilizar los campos privados #saldo y #titular se evita que cualquier parte externa del programa modifique directamente estos valores.

De esta manera, todas las modificaciones del saldo deben realizarse mediante métodos controlados que aplican validaciones de negocio como depósitos válidos, retiros permitidos y límites de sobregiro.

Este mecanismo reduce errores y protege la consistencia de la información financiera.

## 3. Escalabilidad

La arquitectura propuesta facilita la incorporación de nuevos productos financieros.

Por ejemplo, para agregar una clase Credito o Inversion bastaría con crear una nueva clase que herede de CuentaBancaria e implemente sus propias reglas de negocio.

La funcionalidad común, como la gestión del titular, el saldo y las validaciones básicas, permanecería centralizada en la clase base.

Esto reduce la duplicación de código y permite extender el sistema sin afectar las clases ya existentes, favoreciendo la mantenibilidad y evolución del software.
