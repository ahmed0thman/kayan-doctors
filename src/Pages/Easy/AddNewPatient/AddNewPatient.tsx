import React, { useState } from 'react'
import ModalSuccess from '../../../Components/ModalSuccess/ModalSuccess';
import { useSelector } from 'react-redux';
import { prescriptionState } from '../../../Settings/store/features/prescriptions/prescriptionSlice';
import { specialization } from '../../../Settings/store/features/prescriptions/types';

const AddNewPatient = () => {
  const prescription = useSelector(prescriptionState)
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const HandleSave = () => {
    handleShowSuccess()
  }
  return (
    <>
      <ModalSuccess
        msg='Patient registered successfully.'
        show={showSuccess}
        handleClose={handleCloseSuccess}
      />
      <section>
        <h3 className="heading fw-bold">
          Personal Information
        </h3>
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='patientName' className="form-label">
                Patient Name
              </label>
              <input type="text" name="patientName" id="patientName" className="form-control" placeholder='Please enter patient name' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='phoneNumber' className="form-label">
                Phone Number
              </label>
              <input type="number" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='Please enter phone number' />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='gender' className="form-label">
                Gender
              </label>
              <select name="gender" id="gender" className="form-select">
                <option value="">
                  Select Gender
                </option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='address' className="form-label">
                address
              </label>
              <input type="text" name="address" id="address" className="form-control" placeholder='Please enter address' />
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="form-group">
                  <label htmlFor='state' className="form-label">
                    state
                  </label>
                  <select name="state" id="state" className="form-select">
                    <option value="">
                      Select state
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-group">
                  <label htmlFor='city' className="form-label">
                    city
                  </label>
                  <select name="city" id="city" className="form-select">
                    <option value="">
                      Select city
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='pay' className="form-label">
                pay
              </label>
              <input type="text" name="pay" id="pay" className="form-control" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor='age' className="form-label">
                age
              </label>
              <input type="text" name="age" id="age" className="form-control"
                placeholder='Please enter age' />
            </div>
          </div>
          {
            prescription.specialization === specialization.GYNECOLOGIST &&
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor='husband' className="form-label">
                  Husband's Name
                </label>
                <input type="text" name="husband" id="husband" className="form-control"
                  placeholder="Please enter Husband's Name" />
              </div>
            </div>
          }
          {
            prescription.specialization === specialization.PEDIATRICIAN &&
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor='mother' className="form-label">
                  Mother's Name
                </label>
                <input type="text" name="mother" id="mother" className="form-control"
                  placeholder="Please enter Mother's Name" />
              </div>
            </div>
          }
        </div>

        <button className="btn btn-primary btn-submit"
          onClick={HandleSave}
        >
          Save
        </button>
      </section>
    </>
  )
}

export default AddNewPatient