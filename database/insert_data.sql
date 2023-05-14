USE virtualschool;

insert into course (name, descript) values 
('ADS', 'Tecnologia em Análise e Desenvolvimento de Sistemas'),
('CEN', 'Ciências Exatas e da Natureza'),
('EDF', 'Educação Física'),
('CCB', 'Ciências Contábeis');

insert into subject (name, descript, idCourse) values 
('CCT', 'Conceitos de Computação', 1),
('ITI', 'Infraestrutura e Tecnologia da Informação', 1),
('APG', 'Algoritmos e Programção', 1),
('EGS', 'Engenharia de Software', 1);

insert into class (name, descript, idSubject) values
('História e desenvolvimento da TI', 'Sobre a evolução da TI e seus impactos no contexto social e ecônomico', 1),
('A transformação do dado à criação do conhecimento', 'A diferença entre informação, dado e conhecimento, além de como gestão de dados é importante para a gestão da TI.', 1);

insert into user (name, login, password, registration, phone, email, address, city, state, number, idCourse) values
('Ricardo Amorim', 'ricardo', '1234', '12.1123', '(99) 99999-9999', 'ricardo@school.com', 'Rua Dia Azul', 'Hortolândia', 'São Paulo', '20', 1),
('Beatriz Amorim', 'beatriz', '1234', '12.1124', null, 'beatriz@school.com', null, null, null, null, 1);

