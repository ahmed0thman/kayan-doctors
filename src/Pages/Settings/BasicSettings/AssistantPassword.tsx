import React from 'react'

const AssistantPassword = () => {
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Password Assistant
      </h4>

      <div className="setting-form">
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-5">
            <div className="form-group">
              <label htmlFor='username' className="form-label">
              user name
              </label>
              <input type="text" name="username" id="username" className="form-control" placeholder='Please enter the name' />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="form-group">
              <label htmlFor='password' className="form-label">
              password
              </label>
              <input type="password" name="password" id="password" className="form-control" placeholder='Please enter the password' />
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-submit">
          Save
        </button>
      </div>

    </section>
  )
}

export default AssistantPassword