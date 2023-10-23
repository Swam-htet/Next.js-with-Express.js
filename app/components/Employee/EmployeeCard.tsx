'use client';

import Employee from "@/lib/redux/slices/employeeSlice/employee";
import {useRouter} from "next/navigation";

export default function EmployeeCard(props: { employee: Employee, editHandler: (employee: Employee) => void }) {
    let router = useRouter();

    function btnEditHandler() {
        props.editHandler(props.employee);
    }

    function btnDetailHandler() {
        router.push(`/employees/${props.employee._id}`)
    }

    return <div className={'col-6 col-md-4 p-2'}>
        <div className={'card p-3'}>
            <h6 className={'card-title'}>{props.employee.firstName + " " + props.employee.lastName}</h6>

            <div>
                Store - {
                props.employee.store?.name
            }
            </div>

            <div>
                Address - {
                props.employee.address?.street
            }
            </div>

            <div className={'card-footer'}>
                <button className={'btn btn-primary me-2'}
                        onClick={btnEditHandler}
                        type={'button'}>
                    Edit
                </button>
                <button className={'btn btn-success'}
                        onClick={btnDetailHandler}
                        type={'button'}>
                    Detail
                </button>
            </div>

        </div>
    </div>;
}
