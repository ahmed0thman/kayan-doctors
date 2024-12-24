import React from 'react'
import { statsCard } from './types'
import rateUp from "../../assets/images/icons/rate-up.svg"
import rateDown from "../../assets/images/icons/rate-down.svg"
import { strings } from '../../Settings/localization/strings'

const StatsCard = ({stats}:{stats: statsCard}) => {
  return (
    <div className="stats-card">
      <div className="card-body">
        <div className="card-info">
          <p className="card-title">
            {stats.stats.name}
          </p>
          <p className="card-value">
            {stats.stats.value?.toLocaleString()}
          </p>
        </div>
        <img src={stats.icon} alt="" className="card-img" />
      </div>
      <div className="card-summary">
        <img src={stats.stats.rateChange===strings.up?rateUp:rateDown} alt="" />
        <p className="summary">
          <span className={`value-summary ${stats.stats.rateChange}`}>
            {stats.stats.summary} %
          </span>
          <span className="rate-change">
            {stats.stats.rateChange}
          </span>
          <span>
            {strings.fromYesterday}
          </span>
        </p>
      </div>
    </div>
  )
}

export default StatsCard