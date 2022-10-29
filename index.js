const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select an option and press enter',
            name: 'menu',
            choices:['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role','Exit']
        }
    ])
    .then((data) => {
        if (data.menu === 'View all departments') {
            console.log('View all departments')
        } else if (data.menu === 'View all roles') {
            console.log('View all roles')
        } else if (data.menu === 'View all employees') {
            console.log('View all employees')
        } else if (data.menu === 'Add a department') {
            console.log('Add a department')
        } else if (data.menu === 'Add a role') {
            console.log('Add a role')
        } else if (data.menu === 'Add an employee') {
            console.log('Add an employee')
        } else if (data.menu === 'Update an employee role') {
            console.log('Update an employee role')
        } else if (data.menu === 'Exit') {
            console.log('Exit')
        }
    });

