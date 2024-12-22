import { createSlice } from "@reduxjs/toolkit";
import { ROOT_STATE } from "../../store";

const initialState = true

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers:{
    setLoadingState(state, action){
      return action.payload
    }
  }
})

export const loadingState = (state:ROOT_STATE) => state.loading
export const {setLoadingState} = loadingSlice.actions
export default loadingSlice.reducer