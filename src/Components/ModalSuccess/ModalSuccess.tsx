const ModalSuccess = ({msg,show,handleClose}:{
  msg: string,
  show: boolean,
  handleClose: any
}) => {
  return (
    <div className={`modal ${show && 'show'}`}>

      <div className="modal-container">
        <span className="btn btn-close"
          onClick={handleClose}>
        </span>
        <div className="d-flex flex-column gap-4 align-items-center">
          <div className="img-success"></div>
          <h3 className="heading fw-bold">
            Congratulations!
          </h3>
          <p className='sub-text text-center' style={{maxWidth:"200px"}}>
            {msg}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ModalSuccess