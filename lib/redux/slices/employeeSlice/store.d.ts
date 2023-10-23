import Address from "@/lib/redux/slices/employeeSlice/address";

export default interface Store {
    _id?: string;
    name?: string;
    address?: Address;
    phoneNumber?: string;
    __v?: number;
}
