INSERT INTO `kerma_cat_view_preguntas` (`campo`, `activo`, `version`, `identificador`, `titulo`, `nombre`, `proxima_pregunta`, `id_numeracion_pregunta`, `etiqueta_numeracion_pregunta`, `placeholder`, `id_modulo__encabezado_pregunta`, `id_tipo_pregunta`, `tooltip`, `wildcard`) VALUES
('', 0, 0, 'PSS1', b'0', 'Abogados Junior', NULL, 2, '1', NULL, 44, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Medio', NULL, 3, '1', NULL, 44, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Senior', NULL, 4, '1', NULL, 44, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Biblioteca', NULL, 17, '1', NULL, 44, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Seguridad', NULL, 22, '1', NULL, 44, 4, NULL, NULL);


select AES_DECRYPT( email,'gtg5igLZasUC3xNfDlvTGBxxkoMuR6FaCYw5') AS email, AES_DECRYPT( contrasena,'gtg5igLZasUC3xNfDlvTGBxxkoMuR6FaCYw5') AS contrasena, id_perfil from kerma_usuarios




INSERT INTO `kerma_capital_humano_actual_por_preguntas` (`version`, `id_capital_humano_actual`, `id_pregunta`) VALUES
( 0, 78, 912),
( 0, 79, 912),
( 0, 80, 912),
( 0, 81, 912),
( 0, 82, 912),
( 0, 83, 912);



INSERT INTO `kerma_capital_humano_actual_por_preguntas` (`version`, `id_capital_humano_actual`, `id_pregunta`) VALUES
( 0, 78, 913),
( 0, 79, 913),
( 0, 80, 913),
( 0, 81, 913),
( 0, 82, 913),
( 0, 83, 913);


INSERT INTO `kerma_capital_humano_actual_por_preguntas` (`version`, `id_capital_humano_actual`, `id_pregunta`) VALUES
( 0, 78, 914),
( 0, 79, 914),
( 0, 80, 914),
( 0, 81, 914),
( 0, 82, 914),
( 0, 83, 914);



INSERT INTO `kerma_capital_humano_actual_por_preguntas` (`version`, `id_capital_humano_actual`, `id_pregunta`) VALUES
( 0, 78, 915),
( 0, 79, 915),
( 0, 80, 915),
( 0, 81, 915),
( 0, 82, 915),
( 0, 83, 915);



INSERT INTO `kerma_capital_humano_actual_por_preguntas` (`version`, `id_capital_humano_actual`, `id_pregunta`) VALUES
( 0, 78, 916),
( 0, 79, 916),
( 0, 80, 916),
( 0, 81, 916),
( 0, 82, 916),
( 0, 83, 916);









//selector si/no

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(912, 38),
(912, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(913, 38),
(913, 39);


INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(914, 38),
(914, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(914, 38),
(914, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(915, 38),
(915, 39);




kerma_cat_view_encabezado_pregunta  (sub_modulos)
kerma_cat_view_encabezado_pregunta  (botones)


kerma_grupo_capital_humano



INSERT INTO `kerma_grupo_capital_humano` (`id`, `version`, `descripcion`) VALUES
(37, 0, 'Seguro de vida'),
(38, 0, 'Vida en el\nextranjero'),
(39, 0, 'Gastos Médicos\nMayores'),
(40, 0, 'Gastos Médicos\nMayores en el extranjero'),
(41, 0, 'Gastos Médicos\nMenores'),
(42, 0, 'Seguro de responsabilidad Civil profesional');




(0, Apoyo en estudios y capacitación (si/no) 
Colegiaturas	
Coaching	
Becas Nacionales
Porcentaje de ayuda(decimal)
Becas Extranjero(si/no)	
Porcentaje de Ayuda(decimal)	
Internship(si/no)	
Pago de cuotas en asociaciones nacionales
Pago de cuotas en asociaciones internacionales
Viajes de Promoción	PRESTAMOS



///////////////////////////////////////


(ID_NUEVOS)  9 8 82-93 

//1- Submodulo, OJO. YA NO HAY Q CREARLO
INSERT INTO kerma_modulos_capital_humano (`descripcion`) VALUES
(9, 'Prestaciones');

//2- Crear categoria, q viene siendo algo similar a los submodulos
INSERT INTO kerma_categoria_capital_humano (descripcion, id_tipo_capital_humano) VALUES
('PRESTACIONES PARA ESTUDIOS Y DESARROLLO',3);  //3=prestaciones aparece en la tabla "kerma_tipo_capital_humano"
**crea el id 14


//3- creo mis grupos que serán "al final los botones"
INSERT INTO `kerma_grupo_capital_humano` (`version`, `descripcion`) VALUES
('0', 'Apoyo en estudios y capacitación'),
('0', 'Colegiaturas'),
('0', 'Coaching'),
('0', 'Becas Nacionales'),
('0', 'Porcentaje de ayuda'),
('0', 'Becas Extranjero'),
('0', 'Porcentaje de Ayuda'),
('0', 'Internship'),
('0', 'Pago de cuotas en asociaciones nacionales'),
('0', 'Pago de cuotas en asociaciones internacionales'),
('0', 'Viajes de Promoción'),
('0', 'PRESTAMOS');
  ///creo los idss   82-93


//4- 
INSERT INTO  kerma_capital_humano_actual (id_modulo_capital_humano, id_categoria_capital_humano, id_grupo_capital_humano) VALUES 
(9, 14 ,82),
(9, 14 ,83),
(9, 14 ,84),
(9, 14 ,85),
(9, 14 ,86),
(9, 14 ,87),
(9, 14 ,88),
(9, 14 ,89),
(9, 14 ,90),
(9, 14 ,91),
(9, 14 ,92),
(9, 14 ,93);

crea ids 114 --125

select * from kerma_capital_humano_actual where id_categoria_capital_humano=14


(9, 14 ,82-93)
  

5-   

INSERT INTO  kerma_capital_humano_actual_por_preguntas (id_capital_humano_actual, id_pregunta) VALUES 
(114-125, )

si/no
INSERT INTO  kerma_capital_humano_actual_por_preguntas (id_capital_humano_actual, id_pregunta) VALUES 
(114-125,      )
118,120 no, 

INSERT INTO  kerma_capital_humano_actual_por_preguntas (id_capital_humano_actual, id_pregunta) VALUES 
(118,922 ),
(118,923 ),
(118,924 ),
(118,925 ),
(118,926 ),
(118,927 ),
(118,928 ),
(118,929 ),
(118,930 ),
(118,931 ),
(118,932 ),
(118,933 ),
(118,934 ),
(118,935 ),
(118,936 ),
(118,937 ),
(118,938 ),
(118,939 ),
(118,940 ),
(118,941 ),
(118,942 ),
(118,943 );

INSERT INTO  kerma_capital_humano_actual_por_preguntas (id_capital_humano_actual, id_pregunta) VALUES 
(120,922 ),
(120,923 ),
(120,924 ),
(120,925 ),
(120,926 ),
(120,927 ),
(120,928 ),
(120,929 ),
(120,930 ),
(120,931 ),
(120,932 ),
(120,933 ),
(120,934 ),
(120,935 ),
(120,936 ),
(120,937 ),
(120,938 ),
(120,939 ),
(120,940 ),
(120,941 ),
(120,942 ),
(120,943 );

INSERT INTO  kerma_capital_humano_actual_por_preguntas (id_capital_humano_actual, id_pregunta) VALUES 
(125,922 ),
(125,923 ),
(125,924 ),
(125,925 ),
(125,926 ),
(125,927 ),
(125,928 ),
(125,929 ),
(125,930 ),
(125,931 ),
(125,932 ),
(125,933 ),
(125,934 ),
(125,935 ),
(125,936 ),
(125,937 ),
(125,938 ),
(125,939 ),
(125,940 ),
(125,941 ),
(125,942 ),
(125,943 );


(0, Apoyo en estudios y capacitación (si/no)  82
Colegiaturas		83
Coaching	 84
Becas Nacionales 85
Porcentaje de ayuda(decimal) 86
Becas Extranjero(si/no)	 87
Porcentaje de Ayuda(decimal)	 88
Internship(si/no)	 89
Pago de cuotas en asociaciones nacionales 90
Pago de cuotas en asociaciones internacionales 91
Viajes de Promoción	 92
PRESTAMOS 93



INSERT INTO `kerma_cat_view_preguntas` (`campo`, `activo`, `version`, `identificador`, `titulo`, `nombre`, `proxima_pregunta`, `id_numeracion_pregunta`, `etiqueta_numeracion_pregunta`, `placeholder`, `id_modulo__encabezado_pregunta`, `id_tipo_pregunta`, `tooltip`, `wildcard`) VALUES
('', 0, 0, 'PSS1', b'0', 'Abogados Junior', NULL, 2, '1', NULL, 57, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Medio', NULL, 3, '1', NULL, 57, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Senior', NULL, 4, '1', NULL, 57, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Biblioteca', NULL, 17, '1', NULL, 57, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Seguridad', NULL, 22, '1', NULL, 57, 4, NULL, NULL);




INSERT INTO `kerma_cat_view_preguntas` (`campo`, `activo`, `version`, `identificador`, `titulo`, `nombre`, `proxima_pregunta`, `id_numeracion_pregunta`, `etiqueta_numeracion_pregunta`, `placeholder`, `id_modulo__encabezado_pregunta`, `id_tipo_pregunta`, `tooltip`, `wildcard`) VALUES
('', 0, 0, 'PSS1', b'0', 'Socios', NULL, 1, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Junior', NULL, 2, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Medio', NULL, 3, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Senior', NULL, 4, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Profesionales No Abogados', NULL, 5, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Pasantes', NULL, 6, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Director administrativo', NULL, 7, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Administrador/Office Manager', NULL, 8, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Gerentes administrativos', NULL, 9, '1', NULL, 57, 6, NULL, NULL),

('', 0, 0, 'PSS1', b'0', 'Auxiliares administrativos', NULL, 10, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Analista', NULL, 11, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Asistentes', NULL, 12, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Recepcionistas', NULL, 13, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Tesorería', NULL, 14, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Traductor', NULL, 15, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Archivista', NULL, 16, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Biblioteca', NULL, 17, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Capturista', NULL, 18, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Gestor', NULL, 19, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Mensajero', NULL, 20, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Intendencia', NULL, 21, '1', NULL, 57, 6, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Seguridad', NULL, 22, '1', NULL, 57, 6, NULL, NULL);




INSERT INTO `kerma_cat_view_preguntas` (`campo`, `activo`, `version`, `identificador`, `titulo`, `nombre`, `proxima_pregunta`, `id_numeracion_pregunta`, `etiqueta_numeracion_pregunta`, `placeholder`, `id_modulo__encabezado_pregunta`, `id_tipo_pregunta`, `tooltip`, `wildcard`) VALUES
('', 0, 0, 'PSS1', b'0', 'Abogados Junior', NULL, 2, '1', NULL, 58, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Medio', NULL, 3, '1', NULL, 58, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Abogados Senior', NULL, 4, '1', NULL, 58, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Biblioteca', NULL, 17, '1', NULL, 58, 4, NULL, NULL),
('', 0, 0, 'PSS1', b'0', 'Seguridad', NULL, 22, '1', NULL, 58, 4, NULL, NULL);




INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(917, 38),
(917, 39);


INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(918, 38),
(918, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(919, 38),
(919, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(920, 38),
(920, 39);

INSERT INTO `kerma_cat_view_valores_predefinidos_pregunta` (`id_pregunta`, `id_valores_predefinidos`) VALUES
(921, 38),
(921, 39);
