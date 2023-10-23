import axios from "@/app/setting/axios";
import {API_URL} from "@/app/setting/API";
import Employee from "@/lib/redux/slices/employeeSlice/employee";


let employee_URL = API_URL + "/employees";

export async function fetchAllEmployee() {
    // console.log("URL ",employee_URL)        ;
    let response = await axios.get(employee_URL);
    return response;
}

export async function saveEmployee(model: Employee, store_id:string) {
    let postURL = `${API_URL}/stores/${store_id}/employees`;
    let response = await axios.post(postURL, model);
    return response;
}