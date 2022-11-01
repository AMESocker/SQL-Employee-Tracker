//----ascii art----
console.log(`
███████ ███    ███ ██████  ██       ██████  ██    ██ ███████ ███████     ████████ ██████   █████   ██████ ██   ██ ███████ ██████  
██      ████  ████ ██   ██ ██      ██    ██  ██  ██  ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
█████   ██ ████ ██ ██████  ██      ██    ██   ████   █████   █████          ██    ██████  ███████ ██      █████   █████   ██████  
██      ██  ██  ██ ██      ██      ██    ██    ██    ██      ██             ██    ██   ██ ██   ██ ██      ██  ██  ██      ██   ██ 
███████ ██      ██ ██      ███████  ██████     ██    ███████ ███████        ██    ██   ██ ██   ██  ██████ ██   ██ ███████ ██   ██ 
`)
//--------

const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
//----database selection----
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Password!',
      database: 'star_wars_V_db'
    },
    console.log(`Connected to the star_wars_V_db database.`),
    );
    // afterConnection()
    

// db.query("SELECT * FROM employees", function(err,res) {
//     if(res){
//         res.forEach(function(employees){
//         console.log(res)
//       })
//       }
// });


//----Menus----
mainMenu()
//----Main Menu----
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
//----view data----
        if (data.menu === 'View all departments') {
            console.log('No. Try not. Do... or do not. There is no try.');
            db.query("SELECT * FROM departments", function(err,res) {
                if(res){
                    console.table(res)
                  }
                  mainMenu();
            });
           
        } else if (data.menu === 'View all roles') {
            console.log('I love you. - I know.');
            db.query("SELECT * FROM roles", function(err,res) {
                if(res){
                    console.table(res)
                  }
                  mainMenu();
            });
        } else if (data.menu === 'View all employees') {
            console.log('Never tell me the odds.');
            db.query("SELECT * FROM employees", function(err,res) {
                if(res){
                    console.table(res)
                  }
                  mainMenu();
            });
//----to add menus----
        } else if (data.menu === 'Add a department') {
            console.log("They'd be crazy to follow us, wouldn't they?");
            addDepartment();
        } else if (data.menu === 'Add a role') {
            console.log('Add a role');
            addRole();
        } else if (data.menu === 'Add an employee') {
            console.log('You said you wanted to be around when I made a mistake, well, this could be it, sweetheart.');
            addEmployee();
//----to update menus----
        } else if (data.menu === 'Update an employee role') {
            console.log('Would it help if I got out and pushed?');
            updateEmployeeRole();
        } else if (data.menu === 'Exit') {
            db.end();
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
//----Add Menus----
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
            addRole();
        } else if (!dataRole.anotherRole){
            mainMenu();
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
    .then((dataEmp) => {
        if (dataEmp.anotherEmp){
            console.log('another Employee');
            addEmployee();
        } else if (!dataEmp.anotherEmp) {
            mainMenu();
        }
    })
};
//----Update Menus----
function updateEmployeeRole(){
    inquirer
    .prompt([
        {
            type:'list',
            message:'What would you like to update?',
            name:'updateRole',
            choices:['Role','Salary','Department','Main Menu']

        }
    ])
    .then((updateData) => {
        if (updateData.updateRole === 'Role'||'Salary'||'Department'||'Main Menu') {
            mainMenu();
        }
    });
};
//--------