USE gestion_veterinaria;

-- ============================================
-- DATOS DE PRUEBA - DUEÑOS
-- ============================================

INSERT INTO duenos (
    nombre_completo,
    correo_electronico,
    telefono
) VALUES
('Juan Pérez', 'juan.perez@email.com', '3001234567'),
('María Gómez', 'maria.gomez@email.com', '3109876543'),
('Carlos Rodríguez', 'carlos.rodriguez@email.com', '3205558899');

-- ============================================
-- DATOS DE PRUEBA - MASCOTAS
-- ============================================

INSERT INTO mascotas (
    nombre,
    especie,
    fecha_nacimiento,
    id_dueno
) VALUES
('Max', 'Perro', '2020-05-15', 1),
('Michi', 'Gato', '2021-08-20', 2),
('Piolín', 'Ave', '2022-03-10', 3);

-- ============================================
-- DATOS DE PRUEBA - VETERINARIOS
-- ============================================

INSERT INTO veterinarios (
    nombre_completo,
    especialidad,
    licencia_profesional
) VALUES
('Dra. Laura Martínez', 'Medicina General Veterinaria', 'VET-1001'),
('Dr. Andrés Torres', 'Cirugía Veterinaria', 'VET-1002');

-- ============================================
-- DATOS DE PRUEBA - CITAS MÉDICAS
-- ============================================

INSERT INTO citas_medicas (
    fecha_hora,
    costo,
    diagnostico,
    id_mascota,
    id_veterinario
) VALUES
(
    '2025-11-15 09:00:00',
    85000.00,
    'Consulta general. Mascota en buen estado de salud.',
    1,
    1
),
(
    '2025-11-16 10:30:00',
    120000.00,
    'Vacunación anual y control de peso.',
    2,
    1
),
(
    '2025-11-17 14:00:00',
    150000.00,
    'Evaluación de lesión en ala derecha. Se recomienda seguimiento.',
    3,
    2
);
