import React from "react";

const ModalWarningDelete = ({
  show,
  handleClose,
  handleOk,
}: {
  show: boolean;
  handleClose: any;
  handleOk: any;
}) => {
  return (
    <div className={`modal ${show && "show"}`}>
      <div className="modal-container p-4 px-5">
        <div className="d-flex flex-column gap-4 align-items-center">
          <div className="img-warning"></div>
          <h3 className="heading fw-bold">Are you sure delete this?</h3>
          <p className="sub-text text-center">
            if deleted, you want be able to recover!
          </p>
        </div>
        <div className="d-flex gap-2 justify-content-end mt-4">
          <button
            className="btn btn-secondary px-3 py-2"
            onClick={handleClose}
          >
            cancel
          </button>
          <button className="btn btn-primary px-3 py-2" onClick={handleOk}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWarningDelete;
