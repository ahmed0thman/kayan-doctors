import React, { useRef } from 'react'

const ImageInput = ({
  setImg,
  img,
  defaultImg
}:{
  setImg:any,
  img:string,
  defaultImg?:any
}) => {
  const imgRef = useRef<HTMLInputElement|null>(null)
  return (
    <div className="img-input" onClick={e => {
      if (imgRef.current) {
        imgRef.current.click()
      }
    }}>
      <input ref={imgRef} type="file" name="" id="" 
        onInput={e =>{
          const file = e.currentTarget.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImg(reader.result as string); // Set the image to state
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <img src={img || defaultImg || ''} alt="" />
      <i className="fa fa-camera fa-lg" aria-hidden="true"></i>
    </div>
  )
}

export default ImageInput
