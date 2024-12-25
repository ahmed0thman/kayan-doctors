import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { prescription, specialization } from "./types";
import { ROOT_STATE } from "../../store";

const initialState:prescription = {
  name: 'mohamed',
  phoneNumber: '01116618800',
  specialization: specialization.GENERAL,
}

const prescriptionSlice = createSlice({
  name:'prescription',
  initialState,
  reducers:{
    setPrescription(state, action: PayloadAction<prescription>){
      return action.payload
    }
  }
})

export default prescriptionSlice.reducer
export const {setPrescription} = prescriptionSlice.actions
export const prescriptionState = (state:ROOT_STATE)=>state.prescription