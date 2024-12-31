import React from 'react'
import clockIcon from './images/clock.svg'
import clockCheckedIcon from './images/clock-checked.svg'

const ArriveStatusButton = ({
  arrived=false,
  handleArriveStatus
}:{
  arrived:boolean,
  handleArriveStatus:any
}) => {
  return (
    <button className="btn p-0"
    onClick={handleArriveStatus}>
      {
        arrived
        ? <img src={clockCheckedIcon} alt="" />
        : <img src={clockIcon} alt="" />
      }
    </button>
  )
}

export default ArriveStatusButton