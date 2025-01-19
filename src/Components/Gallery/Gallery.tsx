import React from 'react'

const Gallery = ({showGallery, hideGallery}:{
    showGallery:boolean,
    hideGallery:any
}) => {
  return (
    <div className={`modal ${showGallery && 'show'}`}>

    </div>
  )
}

export default Gallery