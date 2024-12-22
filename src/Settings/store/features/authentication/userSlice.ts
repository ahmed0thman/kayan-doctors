import { createSlice } from "@reduxjs/toolkit"; 
import { user, userRole } from "./types";
import { ROOT_STATE } from "../../store";

const initialState = {
  user: {
    userName: '',
    ProfileName: '',
    isLoggedIn: false,
    role: userRole.DOCTOR
  } as user,
  status: 'idle',
  error: undefined as string | undefined
}

const userSlice = createSlice({
  name: "LoggedUser",
  initialState,
  reducers:{
    setLoggedUser:{
      reducer(state, action){
        state.user = action.payload
      },
      prepare(isLoggedIn: boolean, userName: string, ProfileName: string, role: userRole) {
        return{
          payload:{
            isLoggedIn,
            userName,
            ProfileName,
            role
          },
          meta: {},
          error: undefined
        }
      },
    }
  }
})

export const loggedUserState = (state:ROOT_STATE)=> state.user

export const {setLoggedUser} = userSlice.actions
export default userSlice.reducer