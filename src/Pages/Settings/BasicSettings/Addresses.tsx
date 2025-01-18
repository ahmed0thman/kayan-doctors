import React from 'react'

const Addresses = () => {
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Add New Address
      </h4>

      <div className="setting-form">
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='state' className="form-label">
                State
              </label>
              <select name="state" id="state" className="form-select">
                <option value="" selected>Choose your state</option>
                <option value="1">test option</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='city' className="form-label">
                City
              </label>
              <select name="city" id="city" className="form-select">
                <option value="" selected>Choose your city</option>
                <option value="1">test option</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='phoneNumber' className="form-label">
                Phone Number
              </label>
              <input type="number" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='Please enter your phone number' />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor='address' className="form-label">
                address
              </label>
              <input type="text" name="address" id="address" className="form-control" placeholder='Please enter your address' />
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-submit">
          Add New
        </button>

      {/* <button className="btn btn-new-address mt-4 fs-6 fw-normal">
        <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
        <span className='mx-2'>
          Add New Address
        </span>
      </button> */}

      <h4 className="heading mt-2">
        Addresses
      </h4>
      
      <div className="custom-table">
      <table className="addresses-table">
        <thead>
          <tr>
            <td>State</td>
            <td>City</td>
            <td>phone</td>
            <td>address</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dakahlia</td>
            <td>Mansoura</td>
            <td>01116618800</td>
            <td>Qesm 2nd 10st</td>
            <td className='actions'>
              <button className="btn text-info">
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger">
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Dakahlia</td>
            <td>Mansoura</td>
            <td>01116618800</td>
            <td>Qesm 2nd 10st</td>
            <td className='actions'>
              <button className="btn text-info">
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger">
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

    </section>
  )
}

export default Addresses