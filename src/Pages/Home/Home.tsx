import React, { useEffect, useState } from 'react'
import { statsCardList } from './statsCardList'
import { statsCard } from './types'
import StatsCard from './StatsCard'
import { useDispatch, useSelector } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setLoadingState } from '../../Settings/store/features/loading/loadingSlice'
import { language } from '../../Settings/store/features/language/languageSlice'
import GaugeChart from './GaugeChart'



const Home = () => {
  const dispatch = useDispatch<APP_DISPATCH>();
  const lan = useSelector(language);
  const [statsList, setStatsList] = useState(statsCardList());
  useEffect(() => {
    dispatch(setLoadingState(false))
  }, [dispatch])
  useEffect(() => {
    setStatsList(statsCardList())
  }, [lan])

  return (
    <div className="home">
      <div className="cards">
        {statsList.map((ele: statsCard, index) => (
          <StatsCard key={index} stats={ele} />
        ))}
      </div>
      <div className="cards mt-3">
        <GaugeChart
          value={75.55}
          arcColor='#883DCF'
          legend='percentage of patient for today'
        />
        <GaugeChart
          value={75.55}
          arcColor='#F9C80E'
          legend='percentage of patient this month'
        />
        <GaugeChart
          value={75.55}
          arcColor='#2BB2FE'
          trackColor='#F86624'
          legend='Female to male percentage for this month'
        />
        <GaugeChart
          value={75.55}
          arcColor='#25E17B'
          legend='percentage of patients reserved last week'
        />

      </div>
    </div>
  )
}

export default Home