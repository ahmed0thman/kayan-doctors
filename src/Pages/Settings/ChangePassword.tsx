import { useState } from 'react';
import ModalSuccess from '../../Components/ModalSuccess/ModalSuccess';

const ChangePassword = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const HandleSavePassword = ()=>{
    handleShowSuccess()
  }
  return (
    <>
      <ModalSuccess
        msg='Your password has been changed successfully.'
        show={showSuccess}
        handleClose={handleCloseSuccess}
      />
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