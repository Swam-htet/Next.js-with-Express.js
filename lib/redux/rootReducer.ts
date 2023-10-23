/* Instruments */
import { counterSlice } from './slices'
import {employeeSlice} from "@/lib/redux/slices/employeeSlice/employeeSlice";

export const reducer = {
  counter: counterSlice.reducer,
  employee:employeeSlice.reducer
}
