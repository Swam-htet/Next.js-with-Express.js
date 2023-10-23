'use client';

/* Components */
import EmployeeList from "@/app/components/Employee/EmployeeList";
import {selectEmployees, useDispatch, useSelector} from "@/lib/redux";
import {useEffect, useState} from "react";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import {Button, Modal} from "react-bootstrap";
import {loadAllEmployeeAsync, saveEmployeeAsync} from "@/lib/redux/slices/employeeSlice/thunks";
import Employee from "@/lib/redux/slices/employeeSlice/employee";


const EmployeeSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    NRC: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required'),

});


function NewEmployeeInput(props: {
    employeeToEdit: Employee
    show: boolean,
    onHide: () => void
}) {
    let dispatch = useDispatch();

    let init = {
        firstName: "",
        lastName: "",
        NRC: "",
        phoneNumber: ""
    }

    return (<>
            <Formik
                initialValues={init}
                validationSchema={EmployeeSchema}
                onSubmit={values => {

                    let store_id = "650c0923952a9d543185f5a3";

                    let address = {
                        street: "Dagon Road",
                        city: "yangon",
                        state: "Yangon",
                        postalCode: "221"
                    };

                    let employee = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        NRC: values.NRC,
                        gender: "Male",
                        address,
                        phoneNumber: values.phoneNumber,
                        workStartDate: "2023-01-09",
                        birthDate: "2003-04-09"
                    };
                    console.log("Employee to save - ", employee);
                    dispatch(saveEmployeeAsync({employee, store_id}))
                        .unwrap()
                        .then(result => {
                            // console.log(result);
                            
                            props.onHide();
                        });
                }}
            >
                {({errors, touched}) => (
                    <Modal show={props.show}
                           onHide={props.onHide}>
                        <Form className={'p-4'}>

                            <h3>{props.employeeToEdit ? "Edit Employee" : "Add New Employee"}</h3>
                            <div className={'mb-2'}>
                                <label className={'form-label'}>Firstname : </label>
                                <Field name="firstName" className={'form-control'}/>
                                <span className={'text-danger'}>
                                {errors.firstName && touched.firstName ? (
                                    <div>{errors.firstName}</div>
                                ) : null}
                                </span>
                            </div>


                            <div className={'mb-2'}>
                                <label className={'form-label'}> Lastname : </label>
                                <Field name="lastName" className={'form-control'}/>
                                <span className={'text-danger'}>
                                {errors.lastName && touched.lastName ? (
                                    <div>{errors.lastName}</div>
                                ) : null}
                                </span>
                            </div>

                            <div className={'mb-2'}>
                                <label className={'form-label'}>NRC : </label>
                                <Field name="NRC" className={'form-control'}/>
                                <span className={'text-danger'}>
                                {errors.NRC && touched.NRC ? <div>{errors.NRC}</div> : null}

                                </span>
                            </div>

                            <div className={'mb-2'}>
                                <label className={'form-label'}>Phone Number : </label>
                                <Field name="phoneNumber" className={'form-control'}/>
                                <span className={'text-danger'}>
                                {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
                                </span>
                            </div>

                            <button type="submit" className={'btn btn-primary'}>
                                {props.employeeToEdit ? "Save" : "Add"}
                            </button>

                        </Form>
                    </Modal>


                )}
            </Formik>
        </>

    );


}

export default function EmployeePage() {

    // model state and handler
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };

    // data
    const employees = useSelector(selectEmployees);
    const dispatch = useDispatch();

    // edit employee
    let [employeeToEdit, setEmployeeToEdit] = useState(null);


    useEffect(() => {
        dispatch(loadAllEmployeeAsync());
    }, []);


    // new employee btn handler
    let newEmployeeBtnHandler = () => {
        setEmployeeToEdit(null);
        handleShow();
    }

    let editHandler = (employee: Employee) => {
        // console.log("Edit Employee - ", employee);
        setEmployeeToEdit(employee);
        handleShow();
    }


    return (<div>
        <Button variant="primary" onClick={newEmployeeBtnHandler}>
            Add New Employee
        </Button>

        {/* employee input model */}
        <NewEmployeeInput show={show} onHide={handleClose}
                          employeeToEdit={employeeToEdit}/>


        {/* employee list rendering */}
        <EmployeeList employees={employees}
                      editHandler={editHandler}/>

    </div>)
}

