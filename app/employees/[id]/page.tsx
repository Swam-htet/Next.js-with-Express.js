'use client';

/* Components */
import EmployeeProfile from "@/app/components/Employee/EmployeeProfile";
import {selectEmployeeByID, selectEmployees, useSelector} from "@/lib/redux";
import Employee from "@/lib/redux/slices/employeeSlice/employee";
import {useRouter} from "next/navigation";


export default function EmployeePage({params}: { params: { id: string } }) {
    // let employee : Employee = {
    //     _id: "651f964eba8791498db12766",
    //     firstName: "Moe",
    //     lastName: "Kyaw",
    //     NRC: "NRC409071",
    //     gender: "Male",
    //     address: {
    //         street: "Bahan Road",
    //         city: "yangon",
    //         state: "Yangon",
    //         postalCode: "1230",
    //         _id: "651f964eba8791498db12766"
    //     },
    //     phoneNumber: "555-222-0099",
    //     workStartDate: "2023-01-01T00:00:00.000Z",
    //     birthDate: "2001-02-08T00:00:00.000Z",
    //     store: {
    //         _id: "651f946fba8791498db12731",
    //         name: "Yoma Store",
    //         address: {
    //             street: "Dama Road",
    //             city: "Yangon",
    //             state: "Tarmwe",
    //             postalCode: "203",
    //             _id: "651f946fba8791498db12732"
    //         },
    //         phoneNumber: "556-111-8888",
    //         __v: 0
    //     },
    //     __v: 0
    // };

    let router = useRouter();


    const employees: Employee[] = useSelector(selectEmployees);
    let employee = selectEmployeeByID(employees, params.id);

    // btn back handler
    let btnBackHandler = () => {
        router.push("/employees");
    }

    return (<div>
        <button className={'btn btn-primary'}
                onClick={btnBackHandler}>
            Back
        </button>
        <EmployeeProfile employee={employee}/>
    </div>)

}

