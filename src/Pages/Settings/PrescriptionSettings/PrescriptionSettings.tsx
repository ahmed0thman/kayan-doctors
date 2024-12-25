import React, { useRef, useState } from 'react'
import SettingsNav from '../SettingsNav'
import ImageInput from '../../../Components/ImageInput';
import { useDispatch, useSelector } from 'react-redux';
import { prescriptionState, setPrescription } from '../../../Settings/store/features/prescriptions/prescriptionSlice';
import { prescription, specialization } from '../../../Settings/store/features/prescriptions/types';
import { APP_DISPATCH } from '../../../Settings/store/store';
import ModalSuccess from '../../../Components/ModalSuccess/ModalSuccess';

const PrescriptionSettings = () => {
  const dispatch = useDispatch<APP_DISPATCH>();
  const [logoImg, setLogoImg] = useState<string>();
  const [sealImg, setSealImg] = useState<string>();
  const prescription = useSelector(prescriptionState)
  const [presc, setPresc] = useState<prescription>(prescription)
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const HandleSave = () =>{
    dispatch(setPrescription(presc))
    handleShowSuccess()
  }
  return (
    <>
    <ModalSuccess
        msg='Prescriptions Data Updated successfully.'
        show={showSuccess}
        handleClose={handleCloseSuccess}
      />
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
              <input type="text" name="name" id="name" className="form-control" placeholder='Please enter your name' value={presc.name} 
              onChange={(e)=> setPresc({...presc, name:e.currentTarget.value})}/>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='specialization' className="form-label">
                Specialization
              </label>
              <select name="specialization" id="specialization" className="form-select"
              value={presc.specialization}
              onChange={(e)=> setPresc({...presc, specialization:e.currentTarget.value as specialization})}>
                <option value="">Please enter your Specialization</option>
                {Object.values(specialization).map((spec) => ( 
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='phoneNumber' className="form-label">
                Phone Number
              </label>
              <input type="number" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='Please enter your phone number' value={presc.phoneNumber} 
              onChange={(e)=> setPresc({...presc, phoneNumber:e.currentTarget.value})}/>
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
            <ImageInput img={logoImg as string} setImg={setLogoImg} />
          </div>
          <div>
            <h5 className="heading mb-3">
              Seal
            </h5>
            <ImageInput img={sealImg as string} setImg={setSealImg} />
          </div>
        </div>

        <button className="btn btn-primary btn-submit"
          onClick={HandleSave}
        >
          Update Data
        </button>
      </section>
    </>

  )
}

export default PrescriptionSettings