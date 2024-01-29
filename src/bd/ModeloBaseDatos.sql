/* 
Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de
base de datos que incluya tablas para vídeos, autores, colaboradores, comentarios, reviews
y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones
de integridad necesarias para que el sistema funcione correctamente.

*/


/* *************************************************POSTGREST*********************************************************** */

 /* Este script SQL crea una base de datos llamada gestion_videos junto con varias tablas para almacenar información relacionada con un sistema de gestión de vídeos. Cada tabla tiene una columna UUID como clave principal para garantizar la unicidad de cada registro. Las tablas incluyen información sobre usuarios, videos, contribuyentes, comentarios y reseñas. Las claves externas se utilizan para establecer relaciones entre tablas y mantener la integridad referencial en la base de datos. */
CREATE DATABASE gestion_videos;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE usuarios (
    usuario_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash TEXT,
    fecha_registro DATE,
    fecha_update DATE
);
CREATE TABLE videos (
    video_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    titulo VARCHAR(200),
    descripcion TEXT,
    fecha_publicacion DATE,
    fecha_update DATE,
    autor_id UUID REFERENCES usuarios(usuario_id)
);

CREATE TABLE colaboradores (
    colaborador_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100),
    fecha_update DATE,
    descripcion TEXT
);

CREATE TABLE comentarios (
    comentario_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    texto TEXT,
    fecha_comentario DATE,
    fecha_update DATE,
    usuario_id UUID REFERENCES usuarios(usuario_id),
    video_id UUID REFERENCES videos(video_id)
);

CREATE TABLE reviews (
    review_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    calificacion INT,
    comentario TEXT,
    fecha_review DATE,
    fecha_update DATE,
    usuario_id UUID REFERENCES usuarios(usuario_id),
    video_id UUID REFERENCES videos(video_id)
);


-- Insertar usuarios
INSERT INTO usuarios (usuario_id, nombre, email, password_hash, fecha_registro, fecha_update) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174000', 'Usuario1', 'usuario1@example.com', crypt('contraseña1', gen_salt('bf')), '2023-01-01', CURRENT_DATE),
    ('223e4567-e89b-12d3-a456-426614174001', 'Usuario2', 'usuario2@example.com', crypt('contraseña2', gen_salt('bf')), '2023-01-02', CURRENT_DATE),
    ('323e4567-e89b-12d3-a456-426614174002', 'Usuario3', 'usuario3@example.com', crypt('contraseña3', gen_salt('bf')), '2023-01-03', CURRENT_DATE);
-- Insertar vídeos
INSERT INTO videos (video_id, titulo, descripcion, fecha_publicacion, autor_id,fecha_update) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174100', 'Video1', 'Descripción del video 1', '2024-01-01', '123e4567-e89b-12d3-a456-426614174000',CURRENT_DATE),
    ('223e4567-e89b-12d3-a456-426614174101', 'Video2', 'Descripción del video 2', '2024-01-02', '223e4567-e89b-12d3-a456-426614174001',CURRENT_DATE),
    ('323e4567-e89b-12d3-a456-426614174102', 'Video3', 'Descripción del video 3', '2024-01-03', '323e4567-e89b-12d3-a456-426614174002',CURRENT_DATE);

-- Insertar colaboradores
INSERT INTO colaboradores (colaborador_id, nombre, descripcion,fecha_update) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174200', 'Colaborador1', 'Descripción del colaborador 1',CURRENT_DATE),
    ('223e4567-e89b-12d3-a456-426614174201', 'Colaborador2', 'Descripción del colaborador 2',CURRENT_DATE),
    ('323e4567-e89b-12d3-a456-426614174202', 'Colaborador3', 'Descripción del colaborador 3',CURRENT_DATE);

-- Insertar comentarios
INSERT INTO comentarios (comentario_id, texto, fecha_comentario, usuario_id, video_id,fecha_update) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174300', 'Comentario 1 en video 1', '2024-01-01', '123e4567-e89b-12d3-a456-426614174000', '123e4567-e89b-12d3-a456-426614174100',CURRENT_DATE),
    ('223e4567-e89b-12d3-a456-426614174301', 'Comentario 2 en video 2', '2024-01-02', '223e4567-e89b-12d3-a456-426614174001', '223e4567-e89b-12d3-a456-426614174101',CURRENT_DATE),
    ('323e4567-e89b-12d3-a456-426614174302', 'Comentario 3 en video 3', '2024-01-03', '323e4567-e89b-12d3-a456-426614174002', '323e4567-e89b-12d3-a456-426614174102',CURRENT_DATE);

-- Insertar reviews
INSERT INTO reviews (review_id, calificacion, comentario, fecha_review, usuario_id, video_id,fecha_update) 
VALUES 
    ('123e4567-e89b-12d3-a456-426614174400', 5, 'Buena review para video 1', '2024-01-01', '123e4567-e89b-12d3-a456-426614174000', '123e4567-e89b-12d3-a456-426614174100',CURRENT_DATE),
    ('223e4567-e89b-12d3-a456-426614174401', 4, 'Buena review para video 2', '2024-01-02', '223e4567-e89b-12d3-a456-426614174001', '223e4567-e89b-12d3-a456-426614174101',CURRENT_DATE),
    ('323e4567-e89b-12d3-a456-426614174402', 3, 'Buena review para video 3', '2024-01-03', '323e4567-e89b-12d3-a456-426614174002', '323e4567-e89b-12d3-a456-426614174102',CURRENT_DATE);
