import React, { useRef, useState } from 'react'
import SettingsNav from '../SettingsNav'
import ImageInput from '../../../Components/ImageInput';

const PrescriptionSettings = () => {
  const logoRef = useRef<HTMLInputElement | null>(null);
  const sealRef = useRef<HTMLInputElement | null>(null);
  const [logoImg, setLogoImg] = useState<string>();
  const [sealImg, setSealImg] = useState<string>();
  return (
    <>
      <SettingsNav active="prescription" />
      <section className='setting-card'>
        <h4 className="heading">
          Doctor Info
        </h4>
        <div className="row">
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
              <label htmlFor='specialization' className="form-label">
                Specialization
              </label>
              <input type="text" name="specialization" id="specialization" className="form-control" placeholder='Please enter your Specialization' />
            </div>
          </div>
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
              <label htmlFor='address' className="form-label">
                Address
              </label>
              <select name="address" id="address" className="form-select">
                <option value="">Choose the address</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                name=""
                id=""
                rows={6}
                className="form-control"
                placeholder='Welcome to the world after death'
              ></textarea>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5 flex-wrap mt-5">
          <div>
            <h5 className="heading mb-3">
              logo
            </h5>
            <ImageInput img={logoImg as string}  setImg={setLogoImg}/>
          </div>
          <div>
            <h5 className="heading mb-3">
              Seal
            </h5>
            <ImageInput img={sealImg as string}  setImg={setSealImg}/>
          </div>
        </div>

        <button className="btn btn-primary btn-submit">
          Update Data
        </button>
      </section>
    </>

  )
}

export default PrescriptionSettings