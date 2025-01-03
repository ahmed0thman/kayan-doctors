import React, { useEffect, useRef, useState } from "react";
import logoIcon from "../../assets/images/icons/logo-2.svg";
import { useSelector } from "react-redux";
import { prescriptionState } from "../../Settings/store/features/prescriptions/prescriptionSlice";
import { format } from "date-fns";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
import Loading from "../Loading";

const PrescriptionForm = ({
  showPrescription,
  setShowPrescription,
  patientInfo,
  consultationDate,
}: {
  showPrescription: boolean;
  setShowPrescription: any;
  patientInfo: any;
  consultationDate: any;
}) => {
  const prescription = useSelector(prescriptionState);
  const prescriptionRef = useRef<HTMLDivElement | null>(null);
  const [previewElement, setPreviewElement] = useState<HTMLImageElement>(
    document.createElement("img")
  );
  previewElement.className = "preview";
  const [previewIsReady, setPreviewIsReady] = useState<boolean>(false);
  
  

  useEffect(() => {
    if (showPrescription) {
      document.body.appendChild(previewElement);
      printPrescription();
      
    }
    else if(previewElement && document.body.contains(previewElement)){
      document.body.removeChild(previewElement);
      setPreviewIsReady(false);
    }
    return () => {
      if (previewElement && document.body.contains(previewElement)) {
        document.body.removeChild(previewElement);
      }
    };
  }, [showPrescription]);

  const HandleHidePrescription = () => {
    setShowPrescription(false);
    
  };

  const printPrescription = () => {
    if (prescriptionRef.current) {
      const input = prescriptionRef.current;
      input.style.margin = "0";
      domtoimage
        .toPng(input, {
          width: input.offsetWidth,
          height: input.scrollHeight - 60,
        })
        .then((dataUrl) => {
          if (dataUrl) {
            previewElement.src = dataUrl;
          }
          input.style.margin = "0 auto";
          setPreviewIsReady(true);
        });
    }
  };
  return (
    <>

    <div className={`modal ${showPrescription &&!previewIsReady && 'show'}`}>
      <Loading/>
    </div>
      <div
        className={`modal prescription ${
          showPrescription && previewIsReady && "show"
        }`}
        onClick={(e) =>
          e.currentTarget === e.target && HandleHidePrescription()
        }
      >
        <div
          className="scroll-wrapper"
          onClick={(e) =>
            e.currentTarget === e.target && HandleHidePrescription()
          }
        >
          {/* <img ref={previewRef} src="" alt="" className="preview" /> */}
          <div ref={prescriptionRef} className="modal-container">
            <h4 className="heading">prescription</h4>
            <div className="prescription-header">
              <img src={logoIcon} alt="" />
              <div className="doctor-info">
                <h2 className="heading">
                  Dr. {prescription.name.split(" ")[0]}{" "}
                  {prescription.name.split(" ")[1]}
                </h2>
                <p className="heading">{prescription.specialization}</p>
                <p className="heading">Your tagline here</p>
              </div>
            </div>
            <div className="patient-info">
              <div className="row">
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">Patient Name</p>
                    <p className="value">{patientInfo?.name}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">age</p>
                    <p className="value">32</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">address</p>
                    <p className="value">Mansoura Qesm 2nd st. 10</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">diagnosis</p>
                    <p className="value">Already Dead</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">gender</p>
                    <p className="value">{patientInfo?.gender}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item">
                    <p className="label">insurance</p>
                    <p className="value">none</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prescription-body">
              <h1 className="heading fw-bold">RX</h1>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="info-item">
                  <p className="label">Date</p>
                  <p className="value">
                    {consultationDate.toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="info-item">
                  <p className="label">Signature</p>
                  <p className="value"></p>
                </div>
              </div>
            </div>

            <div className="prescription-footer">
              <div className="d-flex gap-4 mt-5">
                <svg
                  width="114"
                  height="114"
                  viewBox="0 0 114 114"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M75.75 113.25H63.25V100.75H75.75V113.25ZM63.25 69.5H50.75V100.75H63.25V69.5ZM113.25 57H100.75V82H113.25V57ZM100.75 44.5H88.25V57H100.75V44.5ZM25.75 57H13.25V69.5H25.75V57ZM13.25 44.5H0.75V57H13.25V44.5ZM57 13.25H69.5V0.75H57V13.25ZM10.125 10.125V28.875H28.875V10.125H10.125ZM38.25 38.25H0.75V0.75H38.25V38.25ZM10.125 85.125V103.875H28.875V85.125H10.125ZM38.25 113.25H0.75V75.75H38.25V113.25ZM85.125 10.125V28.875H103.875V10.125H85.125ZM113.25 38.25H75.75V0.75H113.25V38.25ZM100.75 100.75V82H75.75V94.5H88.25V113.25H113.25V100.75H100.75ZM88.25 57H63.25V69.5H88.25V57ZM63.25 44.5H25.75V57H38.25V69.5H50.75V57H63.25V44.5ZM69.5 38.25V25.75H57V13.25H44.5V38.25H69.5ZM24.1875 14.8125H14.8125V24.1875H24.1875V14.8125ZM24.1875 89.8125H14.8125V99.1875H24.1875V89.8125ZM99.1875 14.8125H89.8125V24.1875H99.1875V14.8125Z"
                    fill="#6AAFEA"
                  />
                </svg>
                <div>
                  <h5 className="heading fw-bold">address</h5>
                  <h6 className="sub-text">{"Mansoura Qesm 2nd st. 10"}</h6>
                </div>
              </div>
              <div className="d-flex flex-column gap-3 align-items-end mt-3">
                <h2 className="heading fw-bold">Hospital Name</h2>
                <p>+(02)123456789</p>
                <p>company@mail.com</p>
                <p>www.companyName.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrescriptionForm;
