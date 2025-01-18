import React from 'react'

const Services = () => {
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Add Service
      </h4>

      <div className="setting-form">
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-5">
            <div className="form-group">
              <label htmlFor='serviceTitle' className="form-label">
              title
              </label>
              <input type="text" name="serviceTitle" id="serviceTitle" className="form-control" placeholder='Please enter the title' />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="form-group">
              <label htmlFor='price' className="form-label">
              Price
              </label>
              <input type="number" name="price" id="price" className="form-control" placeholder='Please enter your Price' />
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-submit">
          Add New
        </button>
      </div>

      

      <h4 className="heading mt-5">
        Services List
      </h4>
      <div className="custom-table">
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Price</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>service</td>
            <td>300</td>
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
            <td>service</td>
            <td>300</td>
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

export default Services