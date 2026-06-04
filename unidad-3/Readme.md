# Actividad Evaluativa 1 - Modelado y Creación de la Capa de Persistencia

## Base de Datos: Gestión Veterinaria

### Descripción

Para esta actividad se diseñó una base de datos para la clínica veterinaria **Huellitas Felices**, con el objetivo de almacenar información sobre dueños, mascotas, veterinarios y citas médicas.

La base de datos permite relacionar cada mascota con su dueño, registrar los veterinarios que atienden las consultas y almacenar el historial de citas realizadas.

---

## Decisiones de Diseño

### Identificadores

Se utilizaron campos enteros con **AUTO_INCREMENT** como claves primarias en todas las tablas. Esta decisión facilita la identificación única de cada registro y evita duplicados.

Ejemplos:

* id_dueno
* id_mascota
* id_veterinario
* id_cita

---

### Tipos de Datos

#### Costos de las citas

Para el campo **costo** se utilizó el tipo:

```sql
DECIMAL(10,2)
```

porque permite almacenar valores monetarios con dos decimales de precisión y evita errores que pueden ocurrir con otros tipos numéricos.

Además, se agregó una restricción para impedir valores negativos.

#### Fechas

Se utilizaron dos tipos de datos:

* **DATE** para la fecha de nacimiento de las mascotas.
* **DATETIME** para las citas médicas, ya que es necesario almacenar tanto la fecha como la hora de la consulta.

#### Textos

Se utilizaron campos **VARCHAR** para nombres, correos electrónicos, teléfonos y especialidades, ya que tienen una longitud variable y ocupan menos espacio.

Para el diagnóstico se utilizó **TEXT**, permitiendo almacenar observaciones más extensas.

---

## Restricciones de Integridad

### Campos Obligatorios

Se utilizó la restricción:

```sql
NOT NULL
```

en los campos que son obligatorios para garantizar que la información importante siempre sea registrada.

### Campos Únicos

Se utilizó:

```sql
UNIQUE
```

en:

* correo_electronico
* licencia_profesional

Esto evita que existan dos dueños con el mismo correo o dos veterinarios con la misma licencia profesional.

---

## Integridad Referencial

Se definieron claves foráneas para relacionar las tablas entre sí.

### ON UPDATE CASCADE

Esta opción permite que, si una clave principal cambia, las tablas relacionadas se actualicen automáticamente, manteniendo la consistencia de los datos.

### ON DELETE RESTRICT

Esta opción impide eliminar registros que estén siendo utilizados por otras tablas.

Por ejemplo:

* No se puede eliminar un dueño que tenga mascotas registradas.
* No se puede eliminar una mascota que tenga citas médicas asociadas.
* No se puede eliminar un veterinario que haya atendido citas.

Esta decisión ayuda a proteger el historial médico y evita la pérdida accidental de información importante.

---

## Estructura del Proyecto

```text
unidad3/
└── actividad-1/
    ├── diagramas/
    │   ├── modelo_conceptual.png
    │   └── modelo_logico.png
    ├── sql/
    │   ├── estructura.sql
    │   └── datos_prueba.sql
    └── README.md
```

---

## Herramientas Utilizadas

* Visual Studio Code
* MySQL / MariaDB
* Draw.io
* Git y GitHub

---

## Autor

Trabajo realizado para la Actividad Evaluativa 1 - Unidad 3.
