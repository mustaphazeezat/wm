import express from "express";
import { createEmployee, getEmployees, updateEmployee } from "../controllers.js/employees.js";

const router = express.Router()

console.log(router);
router.get("/employees", getEmployees)
router.post("/employees", createEmployee)
router.patch("/employees/:id", updateEmployee)


export default router