import React, { useEffect } from 'react'
import { statsCardList } from './statsCardList'
import { statsCard } from './types'
import StatsCard from './StatsCard'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setLoadingState } from '../../Settings/store/features/loading/loadingSlice'


const Home = () => {
  const dispatch = useDispatch<APP_DISPATCH>();
  
  useEffect(()=>{
    dispatch(setLoadingState(false))
  },[dispatch])
  return (
    <section className="home">
      <div className="cards">
        {statsCardList.map((ele:statsCard, index)=>(
          <StatsCard key={index} stats={ele}/>
        ))}
      </div>
      <div className="cards">
        <div className="chart-card">
          <div className="card-header">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home