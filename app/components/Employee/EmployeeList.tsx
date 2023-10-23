'use client';

// mock data
import Employee from "@/lib/redux/slices/employeeSlice/employee";
import EmployeeCard from "@/app/components/Employee/EmployeeCard";


// component
export default function EmployeeList(props: {
    employees: Employee[],
    editHandler: (employee: Employee) => void
}) {
    let {employees} = props;
    return (<div>
        <h1>Employee List</h1>
        <div className={'d-flex flex-wrap'}>
            {
                employees.map(employee => (
                    <EmployeeCard key={employee._id}
                                  editHandler={props.editHandler}
                                  employee={employee}/>
                ))
            }
        </div>

    </div>)
}

