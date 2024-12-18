import React from 'react'

const DisclosureInformation = () => {
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Disclosure information
      </h4>
      <div className="setting-form">
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='specialization' className="form-label">
                Specialization
              </label>
              <select name="specialization" id="specialization" className="form-select">
                <option value="">
                  Choose your specialization
                </option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='newPrice' className="form-label">
                New Price
              </label>
              <input type="number" name="newPrice" id="newPrice" className="form-control" placeholder='Please enter your new price' />
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='resumptionPrice' className="form-label">
              Resumption Price
              </label>
              <input type="number" name="resumptionPrice" id="resumptionPrice" className="form-control" placeholder='Please enter resumption price' />
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-submit">
        Save
      </button>
    </section>
  )
}

export default DisclosureInformation