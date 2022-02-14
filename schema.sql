--create a database
create database express_main;

--using database
use express_main;

create TABLE Auth(
    id INTEGER PRIMARY KEY auto_increment,
    firstName VARCHAR(20), 
    lastName VARCHAR(20),
    email VARCHAR(20),
     password VARCHAR(100)
);

create TABLE Task(
    id INTEGER PRIMARY KEY auto_increment,
    title VARCHAR(20), 
    contents VARCHAR(1024),
    userId INTEGER
);

show tables;