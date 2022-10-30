const inquirer = require('inquirer');
console.log(`
███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████     ████████ ██████   █████   ██████ ██   ██ ███████ ██████  
██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
█████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████          ██    ██████  ███████ ██      █████   █████   ██████  
██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████        ██    ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ 
`)
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
            console.log('No. Try not. Do... or do not. There is no try.');
        } else if (data.menu === 'View all roles') {
            console.log('I love you. - I know.');
        } else if (data.menu === 'View all employees') {
            console.log('Never tell me the odds.');
        } else if (data.menu === 'Add a department') {
            console.log("They'd be crazy to follow us, wouldn't they?");
            addDepartment();
        } else if (data.menu === 'Add a role') {
            console.log('Add a role');
            addRole();
        } else if (data.menu === 'Add an employee') {
            console.log('You said you wanted to be around when I made a mistake, well, this could be it, sweetheart.');
            addEmployee();
        } else if (data.menu === 'Update an employee role') {
            console.log('Would it help if I got out and pushed?');
            updateEmployeeRole();
        } else if (data.menu === 'Exit') {
            console.log(`

░██████╗░░█████╗░░█████╗░██████╗░  ██████╗░██╗░░░██╗███████╗
██╔════╝░██╔══██╗██╔══██╗██╔══██╗  ██╔══██╗╚██╗░██╔╝██╔════╝
██║░░██╗░██║░░██║██║░░██║██║░░██║  ██████╦╝░╚████╔╝░█████╗░░
██║░░╚██╗██║░░██║██║░░██║██║░░██║  ██╔══██╗░░╚██╔╝░░██╔══╝░░
╚██████╔╝╚█████╔╝╚█████╔╝██████╔╝  ██████╦╝░░░██║░░░███████╗
░╚═════╝░░╚════╝░░╚════╝░╚═════╝░  ╚═════╝░░░░╚═╝░░░╚══════╝
`);
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
    .then((dataDept) => {
        if (dataDept.anotherDept) {
        console.log('another Dept');
        addDepartment();
        } else if (!dataDept.anotherDept){
            mainMenu();
        }
    });
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
        },
        {
            type:'confirm',
            message:'Would you like to add another role?',
            name: 'anotherRole'
        }
    ])
    .then((dataRole) => {
        if (dataRole.anotherRole){
            console.log('Another Role')
        }
    });
};
function addEmployee(){
    inquirer
    .prompt([
        {
            type:'input',
            message:'Please enter first name:',
            name:'empFirstName'
        },
        {
            type:'input',
            message:'Please enter last name:',
            name:'empLastName'
        },
        {
            type:'input',
            message:'Please enter role:',
            name:'empRole'
        },
        {
            type:'input',
            message:'Please enter manager:',
            name:'empManager'
        },
        {
            type: 'confirm',
            message:'Would you like to add another employee?',
            name: 'anotherEmp'
        }
    ])
};
function updateEmployeeRole(){
    inquirer
    .prompt([
        {

        }
    ])
};