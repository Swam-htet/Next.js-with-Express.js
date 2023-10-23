/* Core */
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Employee from "@/lib/redux/slices/employeeSlice/employee";
import {loadAllEmployeeAsync} from "@/lib/redux/slices/employeeSlice/thunks";


let employeeList: Employee[] = [];

export interface EmployeeSliceState {
    employees: Employee[]
}

const initialState: EmployeeSliceState = {
    employees: []
};


export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        loadAllEmployee: (state, action) => {
            state.employees = action.payload;
        },
        addEmployee:(state,action)=>{
            state.employees.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(loadAllEmployeeAsync.pending, (state, action) => {
            //     console.log("Action's payload - ", action.payload);
            // })
            .addCase(loadAllEmployeeAsync.fulfilled, (state, action) => {
                console.log("Action's payload - ", action.payload);
                // state.employees = action.payload;
            })
    },
})

