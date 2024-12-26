import React, { ReactNode, useEffect } from 'react'
import SubNav from '../../../Components/SubNav/SubNav'
import { useNavigate } from 'react-router-dom'
import folderIcon from '../../../assets/images/icons/folder.svg'

const AddPatient = ({children}:{children?:ReactNode}) => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!children){
      navigate('/add-patients/new-reservation')
    }
  },[navigate])
  
  const subNavLinks=[
    {
      target: `/add-patients/new-reservation`,
      title: 'new reservation',
      icon: folderIcon
    },
    {
      target: `/add-patients/old-reservation`,
      title: 'old reservation',
      icon: folderIcon
    },
    {
      target: `/add-patients/online-reservation`,
      title: 'online reservation',
      icon: folderIcon
    }
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

export default AddPatient