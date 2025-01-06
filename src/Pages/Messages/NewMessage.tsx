import React, { useState } from 'react'
import ModalSuccess from '../../Components/ModalSuccess/ModalSuccess'

const NewMessage = () => {
  const [showSucess, setShowSuccess] =useState<boolean>(false);
  const HandleOpenSuccess = () => setShowSuccess(true)
  const HandleCloseSuccess = () => setShowSuccess(false)
  return (
    <>
      <ModalSuccess
        msg='Messge Was Sent Successfully'
        handleClose={HandleCloseSuccess}
        show={showSucess}
      />
      <section>
      <h4 className="heading">
        New Message
      </h4>

      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="to" className="form-label">To:</label>
            <select name="to" id="to" className="form-select">
              <option value="">-- select receiver</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title:</label>
            <input type="text" id='title' name='title' className="form-control" placeholder='enter message title' />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="content" className="form-label">content:</label>
            <textarea name="content" id="content" rows={7} className="form-control"></textarea>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-submit"
      onClick={HandleCloseSuccess}>
        Send
      </button>
    </section>
    </>
  )
}

export default NewMessage