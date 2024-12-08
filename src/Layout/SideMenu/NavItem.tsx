import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLink } from './types'

const NavItem = ({link}:{link:navLink}) => {
  return (
    <NavLink to={link.target}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
      {link.icon}
      <p className="title">
        {link.title}
      </p>

    </NavLink>
  )
}

export default NavItem