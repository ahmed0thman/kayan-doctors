import React from 'react'
import noResIcon from '../assets/images/gallery/noResults.svg'

const NoData = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <img src={noResIcon} alt="" />
    </div>
  )
}

export default NoData