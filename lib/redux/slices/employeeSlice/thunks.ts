import {createAppAsyncThunk} from '@/lib/redux/createAppAsyncThunk'
import {fetchAllEmployee, saveEmployee} from "@/lib/redux/slices/employeeSlice/api";
import {employeeSlice} from "@/lib/redux";
import Employee from "@/lib/redux/slices/employeeSlice/employee";

export const loadAllEmployeeAsync = createAppAsyncThunk(
    'employee/fetchAllEmployee',
    async (arg, thunkAPI) => {
        const response = await fetchAllEmployee();
        // fixed with normal reducer to direct state update
        thunkAPI.dispatch(employeeSlice.actions.loadAllEmployee(response.data));
        return response.data;
    }
)

export const saveEmployeeAsync = createAppAsyncThunk(
    'employee/saveEmployeeAsync',
    async ({employee, store_id}: { employee: Employee, store_id: string }, thunkAPI) => {
        const response = await saveEmployee(employee, store_id);
        // fixed with normal reducer to direct state update
        thunkAPI.dispatch(employeeSlice.actions.addEmployee(response.data));
        return response.data;
    }
)






