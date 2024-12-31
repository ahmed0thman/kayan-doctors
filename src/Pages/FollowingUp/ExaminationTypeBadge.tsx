import React from 'react'

const ExaminationTypeBadge = ({value}:{value:string}) => {
  return (
    <div className={`badge ${value.toLowerCase()==='new'?'green':'orange'}`}>
      {value}
    </div>
  )
}

export default ExaminationTypeBadge