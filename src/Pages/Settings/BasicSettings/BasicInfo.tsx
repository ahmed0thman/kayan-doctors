import React, { useRef, useState } from 'react'

import defaultProfileImg from '../../../assets/images/gallery/profile.png'
import ImageInput from '../../../Components/ImageInput'

const BasicInfo = () => {
  const imgRef = useRef<HTMLInputElement | null>(null)
  const [profileImg, setProfileImg] = useState<string>();
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Basic Info
      </h4>
      <div className="setting-form">

      <ImageInput img={profileImg as string}  setImg={setProfileImg} defaultImg={defaultProfileImg}/>

        <div className="row flex-grow-1">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='phoneNumber' className="form-label">
                Phone Number
              </label>
              <input type="number" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='Please enter your phone number' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='phoneNumber2' className="form-label">
                Another Phone Number
              </label>
              <input type="number" name="phoneNumber2" id="phoneNumber2" className="form-control" placeholder='Please enter your phone number' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='name' className="form-label">
                Name
              </label>
              <input type="text" name="name" id="name" className="form-control" placeholder='Please enter your name' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='email' className="form-label">
                Email
              </label>
              <input type="email" name="email" id="email" className="form-control" placeholder='Please enter your email' />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-submit">
          Update Data
        </button>
    </section>
  )
}

export default BasicInfo