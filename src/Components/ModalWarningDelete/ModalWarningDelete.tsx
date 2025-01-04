import React from 'react'

const ModalWarningDelete = ({show,handleClose,handleOk}:{
  show: boolean,
  handleClose: any,
  handleOk:any
}) => {
  return (
    <div className={`modal ${show && 'show'}`}>

      <div className="modal-container">
        <div className="d-flex flex-column gap-4 align-items-center">
          <div className="img-warning"></div>
          <h3 className="heading fw-bold">
            Are you sure delete this?
          </h3>
          <p className='sub-text text-center' style={{maxWidth:"200px"}}>
            if deleted, you want be able to recover!
          </p>
        </div>
        <div>
          <button className="btn btn-primary btn-submit"
          onClick={handleOk}>
            delete
          </button>
          <button className="btn btn-secondary btn-submit"
          onClick={handleClose}>
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalWarningDelete