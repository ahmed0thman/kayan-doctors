import { useState } from 'react';

const ChangePassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandleSavePassword = ()=>{
    handleShow()
  }
  return (
    <>
      <div className={`modal ${show&&'show'}`}>
        
        <div className="modal-container">
          <span className="btn btn-close"
          onClick={handleClose}>
          </span>
          <div className="d-flex flex-column gap-4 align-items-center">
            <div className="img-success"></div>
            <h3 className="heading fw-bold">
              Congratulations!
            </h3>
            <p className='sub-text text-center'>
            Your password has been <br/> changed successfully.
            </p>
          </div>
        </div>
      </div>
      <div className="setting-card bg-transparent" style={{ maxWidth: "900px" }}>
        <div className="form-group">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input type="text" name="newPassword" id="newPassword" className="form-control" placeholder='Please enter your new password' />
        </div>
        <button className="btn btn-primary btn-submit"
          onClick={HandleSavePassword}
        >
          Save
        </button>

      </div>
    </>
  )
}

export default ChangePassword