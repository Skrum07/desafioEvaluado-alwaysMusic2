create database alwaysMusic2;

create table users (
id serial primary key,
name varchar(60) not null,
rut varchar(20) not null unique,
course varchar(60),
level varchar(30)
);