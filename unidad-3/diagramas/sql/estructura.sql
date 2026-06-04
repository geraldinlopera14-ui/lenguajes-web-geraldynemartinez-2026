-- ============================================
-- Base de Datos: gestion_veterinaria
-- ============================================

CREATE DATABASE IF NOT EXISTS gestion_veterinaria;
USE gestion_veterinaria;

-- ============================================
-- Tabla: duenos
-- ============================================

CREATE TABLE duenos (
    id_dueno INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL
);

-- ============================================
-- Tabla: mascotas
-- ============================================

CREATE TABLE mascotas (
    id_mascota INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    id_dueno INT NOT NULL,

    CONSTRAINT fk_mascota_dueno
        FOREIGN KEY (id_dueno)
        REFERENCES duenos(id_dueno)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- ============================================
-- Tabla: veterinarios
-- ============================================

CREATE TABLE veterinarios (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    licencia_profesional VARCHAR(50) NOT NULL UNIQUE
);

-- ============================================
-- Tabla: citas_medicas
-- ============================================

CREATE TABLE citas_medicas (
    id_cita INT AUTO_INCREMENT PRIMARY KEY,
    fecha_hora DATETIME NOT NULL,
    costo DECIMAL(10,2) NOT NULL,
    diagnostico TEXT,
    id_mascota INT NOT NULL,
    id_veterinario INT NOT NULL,

    CONSTRAINT chk_costo
        CHECK (costo >= 0),

    CONSTRAINT fk_cita_mascota
        FOREIGN KEY (id_mascota)
        REFERENCES mascotas(id_mascota)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_cita_veterinario
        FOREIGN KEY (id_veterinario)
        REFERENCES veterinarios(id_veterinario)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);