import React from 'react'
import { statsCardList } from './statsCardList'
import { statsCard } from './types'
import StatsCard from './StatsCard'


const Home = () => {
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