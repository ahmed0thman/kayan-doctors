import { createSlice } from "@reduxjs/toolkit";
import {ROOT_STATE } from "../../store";
import { strings } from "../../../localization/strings";


const initialState = strings.home

const activePageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers:{
    setActivePage(state, action){
      return action.payload
    }
  }
})

export const activePage = (state:ROOT_STATE)=> state.activePage
export const {setActivePage} = activePageSlice.actions
export default activePageSlice.reducer
