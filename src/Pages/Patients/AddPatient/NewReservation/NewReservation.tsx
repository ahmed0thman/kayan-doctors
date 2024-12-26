import React, { useState } from 'react'
import ModalSuccess from '../../../../Components/ModalSuccess/ModalSuccess'
import BillCostModal from './BillCostModal';

const NewReservation = () => {

  const [showBillCost, setShowBillCost] = useState(false);

  const handleCloseBillCost = () => setShowBillCost(false);
  const handleShowBillCost = () => setShowBillCost(true);

  const HandleSave = ()=>{
    handleShowBillCost()
  }
  return (
    <>
      <BillCostModal
        show={showBillCost}
        handleClose={handleCloseBillCost}
      />
      <section className='new-reservation'>
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
              <label htmlFor='age' className="form-label">
                age
              </label>
              <input type="text" name="age" id="age" className="form-control"
                placeholder='Please enter age' />
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
              <label htmlFor='phoneNumber' className="form-label">
                Phone Number
              </label>
              <input type="number" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='Please enter phone number' />
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
              <label htmlFor='address' className="form-label">
                address
              </label>
              <input type="text" name="address" id="address" className="form-control" placeholder='Please enter address' />
            </div>
          </div>
          
          
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

export default NewReservation