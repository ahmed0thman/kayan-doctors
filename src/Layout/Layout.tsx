import React from 'react'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'

interface Props {
  children: React.ReactNode;
  Theme?: boolean;
  Home?: boolean;
}

const Layout = (props: Props) => {
  return (
    <div className="app">
      <SideMenu />
      <main>
        <Header />
        <div className="wrapper">
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default Layout