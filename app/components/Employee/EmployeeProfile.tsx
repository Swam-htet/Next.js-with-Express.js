import Employee from "@/lib/redux/slices/employeeSlice/employee";


export default function EmployeeProfile(props: { employee: Employee }) {
    let {employee} = props;
    return (<div className={'container'}>
        <h1>{employee.firstName + " " + employee.lastName}</h1>

        <p>
            Address - {
             employee.address?.street + ", " + employee.address?.city + ", "  + employee.address?.state
        }
        </p>

        <p>
            Phone number - {employee.phoneNumber}
        </p>

        <p>
            Store - {employee.store?.name}
        </p>


    </div>)
}