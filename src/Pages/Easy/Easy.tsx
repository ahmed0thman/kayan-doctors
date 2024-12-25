import React, { ReactNode, useEffect } from 'react'
import SubNav from '../../Components/SubNav/SubNav'
import userIcon from '../../assets/images/icons/user-white.svg'
import { useNavigate } from 'react-router-dom'



const Easy = ({children}:{children?:ReactNode}) => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!children){
      navigate('/easy/allPatient')
    }
  },[navigate])
  
  const subNavLinks=[
    {
      target: `/easy/allPatient`,
      title: 'all patient',
      icon: userIcon
    },
    {
      target: `/easy/newPatient`,
      title: 'add new patient',
      icon: userIcon
    },
  ]
  
  return (
    <>
      <SubNav
        subNavLinks={subNavLinks}
      />
      {children}
    </>
  )
}

export default Easy