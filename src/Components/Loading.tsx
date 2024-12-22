import React from 'react'

const Loading = ({overlap}:{
  overlap?:boolean
}) => {
  return (
    <div className={`loading ${overlap&&'overlap'}`}>
      <div className="spinner-grow color-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow color-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow color-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading