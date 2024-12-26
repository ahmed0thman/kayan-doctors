import React, { useState } from "react";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import ModalSuccess from "../../../../Components/ModalSuccess/ModalSuccess";
import personCardIcon from "../../../../assets/images/icons/person-card.svg";
import billIcon from "../../../../assets/images/icons/bill.svg";

const BillCostModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const HandleSave = () => {
    handleClose();
    handleShowSuccess();
  };
  return (
    <>
      <ModalSuccess
        msg="Reservation done successfully."
        handleClose={handleCloseSuccess}
        show={showSuccess}
      />
      <div className={`modal ${show && "show"} bill-cost`}>
        <div className="modal-container">
          <div className="badge-primary">
            <img src={personCardIcon} alt="" />
            <span>Code No :</span>
            <span>Lil5414re6</span>
          </div>
          <h3 className="heading d-flex gap-3 mb-3">
            <img src={billIcon} alt="" />
            bill cost
          </h3>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="examinationDate" className="form-label">
                  examination date
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    name="examinationDate"
                    minDate={new Date()}
                    defaultValue={new Date()}
                    format="yyyy-MM-dd"
                    className="form-control"
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="time" className="form-label">
                  time
                </label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    name="time"
                    defaultValue={new Date()}
                    className="form-control"
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="type" className="form-label">
                  type
                </label>
                <select name="type" id="type" className="form-select">
                  <option value="">Select Type</option>
                </select>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="cost" className="form-label">
                  cost
                </label>
                <input
                  type="number"
                  name="cost"
                  id="cost"
                  className="form-control"
                  min={0}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="discount" className="form-label">
                  discount
                </label>
                <input
                  type="number"
                  name="discount"
                  id="discount"
                  className="form-control"
                  min={0}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="finalCost" className="form-label">
                  final cost
                </label>
                <input
                  type="number"
                  name="finalCost"
                  id="finalCost"
                  className="form-control"
                  min={0}
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary btn-submit" onClick={HandleSave}>
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default BillCostModal;
