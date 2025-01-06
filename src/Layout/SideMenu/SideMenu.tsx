import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from "../../assets/images/logos/kayan-logo.png"
import { navLinkList } from './navLinkList'
import { navLink } from './types'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'
import { language } from '../../Settings/store/features/language/languageSlice'

const SideMenu = () => {
  const [menuItems, setMenuItems] = useState<navLink[]>(navLinkList())
  const [minMenu, setMinMenu] = useState<boolean>(false)
  const lan = useSelector(language)
  window.onresize = e =>{
    if(window.innerWidth < 992){
      setMinMenu(true)
    }
  }
  useEffect(()=>{
    setMenuItems(navLinkList())
  },[lan])
  return (
    <aside className={`side-menu ${minMenu && 'minimize'}`}>
      <button className="minimize btn btn-outline-primary"
        onClick={e=> setMinMenu((value)=> !value)}>
          {
            minMenu
            ? <i className="fa fa-arrow-left" aria-hidden="true"></i>
            : <i className="fa fa-arrow-right" aria-hidden="true"></i>
          }
      </button>
      <div className="logo-wrapper">
        <Link to={'/'}>
          <img src={Logo} alt="" className='logo' />
        </Link>
      </div>
      <nav className="nav-menu">
        {
          menuItems.map((link: navLink, index) => (
            <NavItem key={index} link={link}/>
          ))
        }
      </nav>
    </aside>
  )
}

export default SideMenu