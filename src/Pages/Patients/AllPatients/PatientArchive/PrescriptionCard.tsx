import React, { useState } from "react";
import PrescriptionForm from "../../../../Components/Prescription/PrescriptionForm";

const PrescriptionCard = ({
  patientInfo,
  HandleOnlyShow
}:{
  patientInfo:any,
  HandleOnlyShow:any
}) => {
  const [showPrescription, setShowPrescription] = useState<boolean>(false);

  const HandleShowPrescription = () => {
    setShowPrescription(true);
  };
  return (
    <>
    <PrescriptionForm
      consultationDate={new Date()}
      patientInfo={patientInfo}
      showPrescription={showPrescription}
      setShowPrescription={setShowPrescription}
    />
    <div className="prescription-card"
    >
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="heading fw-bold">
          Prescription Details
        </h4>
        <div className="d-flex align-items-center gap-1">
          <h5 className="heading fw-bold">Date :</h5>
          <h5 className="heading">2024-08-05</h5>
        </div>
      </div>
      <ul className="medicine-list"
      onClick={HandleOnlyShow}>
        <li>
          <span>Medicine 1</span>
          <span>Dose</span>
        </li>
        <li>
          <span>Medicine 2</span>
          <span>Dose</span>
        </li>
        <li>
          <span>Medicine 3</span>
          <span>Dose</span>
        </li>
      </ul>
      <button className="btn btn-secondary btn-print"
      onClick={HandleShowPrescription}>
        <i className="fa fa-print" aria-hidden="true"></i>
      </button>
    </div>
    </>
  );
};

export default PrescriptionCard;
