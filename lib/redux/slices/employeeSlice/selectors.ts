/* Instruments */
import type {ReduxState} from '@/lib/redux'
import Employee from "@/lib/redux/slices/employeeSlice/employee";

// state < employees < employees[]
export const selectEmployees = (state: ReduxState) => state.employee.employees;
export const selectEmployeeByID = (employees: Employee[], id: string) => employees.find(employee => employee._id === id);

