import React, { ReactNode, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loggedUserState, setLoggedUser } from '../store/features/authentication/userSlice';
import { APP_DISPATCH } from '../store/store';
import { user } from '../store/features/authentication/types';
import { authedState, setAuthedState } from '../store/features/authentication/authedSlice';
import { lang, language, setLanguage } from '../store/features/language/languageSlice';
import { strings } from '../localization/strings';

const RequiredAuth = ({children}:{children:any}) => {
  const lan = useSelector(language)
  const isAuthed = useSelector(authedState)
  const dispatch = useDispatch<APP_DISPATCH>();
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAuthed);
  const navigate = useNavigate();

  if(localStorage.getItem('Lan')){
    dispatch(setLanguage(localStorage.getItem('Lan') as lang))
    strings.setLanguage(lan)
  }
  
  useEffect(()=>{
    if(isAuthed){
      setIsLoggedIn(true)
      
    }
    else if(localStorage.getItem('activeUser')){
      const userInfo:user = JSON.parse(localStorage.getItem('activeUser') as string)
      setIsLoggedIn(true)
      dispatch(setAuthedState(true))
      dispatch(setLoggedUser(
        userInfo.isLoggedIn,
        userInfo.userName,
        userInfo.ProfileName,
        userInfo.role
  
      ))
    }
    else{
      setIsLoggedIn(false)
      navigate('/login')
    }
  },[isAuthed, location.pathname, navigate])

  useEffect(()=>{
    document.body.classList.add('rotate');
    
    setTimeout(
      () => {
        if (lan === 'ar') {
          document.dir = "rtl"
          document.documentElement.setAttribute('lang', 'ar');
        }
        else if (lan === 'en') {
          document.dir = "ltr"
          document.documentElement.setAttribute('lang', 'en');
        }
        document.body.classList.remove('rotate');
      }
      ,
      500
    )
  }, [lan])
  return (
      isLoggedIn && children
  )
}

export default RequiredAuth