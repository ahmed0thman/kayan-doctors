import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/authentication/userSlice'
import loadingReducer from './features/loading/loadingSlice'
import activePageReducer from './features/activePage/activePageSlice'
import languageReducer from './features/language/languageSlice'
import authedReducer from './features/authentication/authedSlice'
import perscriptionReducer from './features/prescriptions/prescriptionSlice'

export const store = configureStore({
  reducer:{
    user: userReducer,
    loading: loadingReducer,
    activePage: activePageReducer,
    language: languageReducer,
    authed: authedReducer,
    prescription: perscriptionReducer
  }
})

export type ROOT_STATE = ReturnType<typeof store.getState>
export type APP_DISPATCH = typeof store.dispatch