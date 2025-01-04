import React, { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { APP_DISPATCH } from '../../../Settings/store/store';
import { setActivePage } from '../../../Settings/store/features/activePage/activePageSlice';
import SubNav from '../../../Components/SubNav/SubNav';
import { subNavLink } from '../../../Components/SubNav/types';
import folderIcon from '../../../assets/images/icons/folder.svg'
import { useNavigate } from 'react-router-dom';

const BarChart = ({children}:{children?:ReactNode}) => {
  const dispatch = useDispatch<APP_DISPATCH>();
  dispatch(setActivePage("Bar Chart"));
  const navigate = useNavigate()
  const tabs:subNavLink[] =[
    {
      target:'/account-reports/bar-chart/inputs',
      title:'inputs',
      icon: folderIcon
    },
    {
      target:'/account-reports/bar-chart/expense',
      title:'expense',
      icon: folderIcon
    },
    {
      target:'/account-reports/bar-chart/net-profit',
      title:'net profit',
      icon: folderIcon
    }
  ] 

  useEffect(()=>{
    if(!children){
      navigate('/account-reports/bar-chart/inputs')
    }
  },[navigate])
  return (
    <>
      <SubNav
        subNavLinks={tabs}
      />
      {children && children}
    </>
  )
}

export default BarChart