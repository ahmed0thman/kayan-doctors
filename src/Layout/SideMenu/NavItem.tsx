import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLink } from './types'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setActivePage } from '../../Settings/store/features/activePage/activePageSlice'

const NavItem = ({link}:{link:navLink}) => {
  const dispatch = useDispatch<APP_DISPATCH>();
  const HandleCurrentPage = ()=>{
    dispatch(setActivePage(link.title))
  }
  return (
    <NavLink to={link.target}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      onClick={HandleCurrentPage}
      >
      {link.icon}
      <p className="title">
        {link.title}
      </p>

    </NavLink>
  )
}

export default NavItem