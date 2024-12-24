import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ROOT_STATE } from "../../store";
import { strings } from "../../../localization/strings";

export type lang = 'en'|'ar'
const initialState = localStorage.getItem('Lan') || 'en'

const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers:{
    setLanguage(state, action: PayloadAction<lang>){
      strings.setLanguage(action.payload)
      localStorage.setItem('Lan', action.payload);
      return action.payload
    }
  }
})

export const {setLanguage} = langSlice.actions
export const language = (state:ROOT_STATE)=> state.language
export default langSlice.reducer