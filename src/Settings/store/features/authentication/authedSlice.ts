import { createSlice } from "@reduxjs/toolkit";
import { ROOT_STATE } from "../../store";

const initialState = false

const authedSlice = createSlice({
  name: 'authed',
  initialState,
  reducers:{
    setAuthedState(state, action){
      return action.payload
    }
  }
})

export default authedSlice.reducer
export const authedState = (state:ROOT_STATE)=>state.authed
export const {setAuthedState} = authedSlice.actions