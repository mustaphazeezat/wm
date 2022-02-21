import React, { createContext, useContext } from 'react'
import axios from 'axios'

const EmployeeContext = createContext()

export function useEmployee(){
    return useContext(EmployeeContext)
}

export const EmployeeProvider = ({children}) => {
    
    async function createEmployee(employee) {
       
        const response = await axios.post('http://localhost:5000/employees', employee)
        return response;
    }
    async function getAllEmployees() {
        const response = await axios.get('http://localhost:5000/employees')
        return response;
    }
    async function updateEmployee(data, id) {
        const response = await axios.patch(`http://localhost:5000/employees/${id}` , data )
        return response;
    }

const value ={
    createEmployee,
    getAllEmployees,
    updateEmployee
}
    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    )
}