import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/logos/kayan-logo.png"
import { navLinkList } from './navLinkList'
import { navLink } from './types'
import NavItem from './NavItem'

const SideMenu = () => {
  return (
    <section className="side-menu">
      <div className="logo-wrapper">
        <Link to={'/'}>
          <img src={Logo} alt="" className='logo' />
        </Link>
      </div>
      <nav className='nav-menu'>
        {
          navLinkList.map((link: navLink, index) => (
            <NavItem key={index} link={link}/>
          ))
        }
      </nav>
    </section>
  )
}

export default SideMenu