import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import { useSelector } from 'react-redux';
import { loadingState } from '../Settings/store/features/loading/loadingSlice';
import Loading from '../Components/Loading';
interface Props {
  children: React.ReactNode;
  Theme?: boolean;
  Home?: boolean;
}

const Layout = (props: Props) => {
  const isLoading = useSelector(loadingState)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(()=>{
    setLoading(isLoading)
    if(isLoading){
      setTimeout(()=>setLoading(false), 2000)
    }
  }, [isLoading])

  return (
    <div className="app">
      <SideMenu />
      <main>
        <Header />
        <div className="page">
          <div className="wrapper h-100 fade show">
            {
              (loading && <Loading/>) ||(
                props.children
              )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout