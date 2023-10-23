/*
    mock data

    {
        "_id": "651f964eba8791498db12765",
        "firstName": "Moe",
        "lastName": "Kyaw",
        "NRC": "NRC409071",
        "gender": "Male",
        "address": {
            "street": "Bahan Road",
            "city": "yangon",
            "state": "Yangon",
            "postalCode": "1230",
            "_id": "651f964eba8791498db12766"
        },
        "phoneNumber": "555-222-0099",
        "workStartDate": "2023-01-01T00:00:00.000Z",
        "birthDate": "2001-02-08T00:00:00.000Z",
        "store": {
            "_id": "651f946fba8791498db12731",
            "name": "Yoma Store",
            "address": {
            "street": "Dama Road",
            "city": "Yangon",
            "state": "Tarmwe",
            "postalCode": "203",
            "_id": "651f946fba8791498db12732"
        },
        "phoneNumber": "556-111-8888",
        "__v": 0
        },
        "__v": 0
    }
    
 */
import Store from "@/lib/redux/slices/employeeSlice/store";
import Address from "@/lib/redux/slices/employeeSlice/address";



export default interface Employee {
    _id?: string;
    firstName?: string;
    lastName?: string;
    NRC?: string;
    gender?: string;
    address?: Address;
    phoneNumber?: string;
    workStartDate?: string;
    birthDate?: string;
    store?: Store;
    __v?: number;
}