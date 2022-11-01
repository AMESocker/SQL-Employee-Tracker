DROP DATABASE IF EXISTS star_wars_V_db; 
CREATE DATABASE star_wars_V_db;

USE star_wars_V_db;

CREATE TABLE departments (
    dept_name VARCHAR(30),
    dept_id INT not null auto_increment primary key
);

CREATE TABLE roles (
    role_id INT not null auto_increment primary key,
    role_title VARCHAR(30),
    role_salary DECIMAL, 
    dept_id INT
);

CREATE TABLE employees (
    id INT not null auto_increment primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);