import {v4 as uuid} from "uuid";

let employees = []

export const getEmployees = (req, res) =>{
    res.send(employees)
}

export const createEmployee = (req, res) =>{
    const employee = req.body;

    employees.push({...employee, id: uuid()});
    res.send("employee added successfully")

}

export const updateEmployee = (req, res) =>{
    const employee = employees.find(employee => employee.id === req.params.id);
    
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.status = req.body.status;

    res.send("employee updated successfully")

}