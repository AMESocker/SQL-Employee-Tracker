DROP DATABASE IF EXISTS star_wars_V_db; 
CREATE DATABASE star_wars_V_db;

USE star_wars_V_db;

CREATE TABLE departments (
    dept_id INT not null auto_increment, 
    dept_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);
 
CREATE TABLE roles (
    role_id INT not null auto_increment PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL, 
    dept_id INT,
    FOREIGN KEY (dept_id)
    REFERENCES departments(dept_id)
);
 
CREATE TABLE employees (
    emp_id INT not null auto_increment PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT ,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
);
