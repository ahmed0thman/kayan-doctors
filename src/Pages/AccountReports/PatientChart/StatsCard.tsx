import React from 'react'

const StatsCard = ({
  img,
  title,
  value
}:{
  img:any,
  title:string,
  value:number
}) => {
  return (
    <div className="stats-card">
      <img src={img? img: ''} alt="" />
      <div className="stats-info">
        <h5 className="sub-text mb-1">
          {title}
        </h5>
        <h4 className="heading">
          {value}
        </h4>
      </div>
    </div>
  )
}

export default StatsCard