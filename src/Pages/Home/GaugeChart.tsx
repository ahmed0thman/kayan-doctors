import { Gauge, gaugeClasses } from '@mui/x-charts'
import React from 'react'

const GaugeChart = ({
  value,
  arcColor,
  trackColor = "#E0E2E7",
  legend
}:{
  value: number,
  arcColor: string,
  trackColor?: string,
  legend: string
}) => {
  return (
    <div className="chart-card">
          <div className="card-header">
            <span className='title'>
              <h4 className="heading">
                Target
              </h4>
              <p className='sub-heading'>Revenue Target</p>
            </span>

            <button className="btn btn-show-more">
              show more
            </button>
          </div>
          <div className="chart-body">
            <Gauge
              width={264}
              height={132}
              value={value}
              startAngle={-90} 
              endAngle={90} 
              innerRadius="92%"
              cornerRadius="50%"
              sx={(theme:any) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 28,
                  fontWeight: 500,
                  color: '#2F4777',
                  transform: 'translate(0px, -35px)',
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: arcColor,
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: trackColor,
                },
              })}
              text={
                ({ value }) => `${value} %`
             }
            />
          </div>
          <div className="chart-legend">
            {legend}
          </div>
        </div>
  )
}

export default GaugeChart