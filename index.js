const inquirer = require('inquirer');

mainMenu()
function mainMenu(){
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select an option and press enter:',
            name: 'menu',
            choices:['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role','Exit']
        }
    ])
    .then((data) => {
        if (data.menu === 'View all departments') {
            console.log('View all departments');
        } else if (data.menu === 'View all roles') {
            console.log('View all roles');
        } else if (data.menu === 'View all employees') {
            console.log('View all employees');
        } else if (data.menu === 'Add a department') {
            console.log('Add a department');
            addDepartment();
        } else if (data.menu === 'Add a role') {
            console.log('Add a role');
            addRole();
        } else if (data.menu === 'Add an employee') {
            console.log('Add an employee');
            addEmployee();
        } else if (data.menu === 'Update an employee role') {
            console.log('Update an employee role');
            updateEmployee();
        } else if (data.menu === 'Exit') {
            console.log('Exit');
        }
    });
};

function addDepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter the department name:',
            name: 'department'
        },
        {
            type: 'confirm',
            message: 'Would you like to add another department',
            name: 'anotherDept'
        }
    ])
    .then((dataDept) => {});
};
function addRole(){
    inquirer
    .prompt([
        {
            type:'input',
            message:'Please enter a role:',
            name:'role'
        },
        {
            type:'number',
            message:'Please enter a salary:',
            name:'number'
        },
        {
            type:'input',
            message:'Please enter a department:',
            name:'roleDepartment'
        }
    ])
    .then((dataDept) => {});
};
function addEmployee(){
    inquirer
    .prompt([
        {
            type:'input',
            message:'',
            name:''
        },
        {
            type:'input',
            message:'',
            name:''
        },
        {
            type:'input',
            message:'',
            name:''
        },
        {
            type:'input',
            message:'',
            name:''
        },
    ])
};
function updateEmployee(){};