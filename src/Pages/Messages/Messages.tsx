import React, { ReactNode, useEffect } from 'react'
import SubNav from '../../Components/SubNav/SubNav'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setActivePage } from '../../Settings/store/features/activePage/activePageSlice'

interface propsType{
  children? : ReactNode
}

const Messages = ({children}:propsType) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Messages'))
  useEffect(()=>{
    if(!children){
      navigate('/messages/received')
    }
  },[navigate])
  return (
    <>
      <SubNav
        subNavLinks={[
          {target:'/messages/received', title:'Received Messages'},  
          {target:'/messages/sent', title:'Sent Messages'},
          {target:'/messages/new', title:'+ New Message', },
        ]}
      />
      {children && children}
    </>
  )
}

export default Messages