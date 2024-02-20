const inquirer = require('inquirer');
const mysql = require('mysql2');
const cfonts = require('cfonts');  

// mySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: "3001", 
    password: 'password',
    database: 'employee_Tracker_db'
});

// Starts the application
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the employee tracker database.');
    start();
});

// cfont stuff
cfonts.say('Employee Tracker', {
    font: 'block',              
    align: 'center',            
    colors: ['green'],        
    background: 'transparent',  
    letterSpacing: 1,           
    lineHeight: 1,              
    space: true,                
    maxLength: '0',             
    gradient: false,
    independentGradient: false,
    transitionGradient: false,
    env: 'node'
});

// Start function
function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "View Employees by Manager",
                "View Employees by Department",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Add a Manager",
                "Update an employee role",
                "Delete Departments / Roles / Employees",
                "View the total utilized budget of a department",
                "Exit",
            ],
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "View Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "View Employees by Department":
                    viewEmployeesByDepartment();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Add a Manager":
                    addManager();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "Delete Departments / Roles / Employees":
                    deleteDepartmentsRolesEmployees();
                    break;
                case "View the total utilized budget of a department":
                    viewTotalUtilizedBudgetOfDepartment();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Connection Ended!");
                    break;
            }
        });
}

