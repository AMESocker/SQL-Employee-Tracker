DROP DATABASE IF EXISTS star_wars_V_db; 
CREATE DATABASE star_wars_V_db;

USE star_wars_V_db;

CREATE TABLE departments (
    dept_id INT,
    dept_name VARCHAR(30)
);

CREATE TABLE roles (
    role_id INT,
    role_title VARCHAR(30),
    role_salary DECIMAL, 
    dept_id INT,
);

CREATE TABLE employees (
    id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);