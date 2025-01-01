import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { patientEasy } from "../../Easy/OldPatients/types";
import PatientInfoCard from "../../../Components/PatientInfoCard/PatientInfoCard";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import infoIcon from "../../../assets/images/icons/info.svg";
import prescriptionIcon from "../../../assets/images/icons/prescription.svg";
import { medicalFile, medicine } from "./types";
import PrescriptionDetails from "./PrescriptionDetails";
import MedicalFile from "./MedicalFile";
import CardFile from "./CardFile";
import { useSelector } from "react-redux";
import { prescriptionState } from "../../../Settings/store/features/prescriptions/prescriptionSlice";
import { specialization } from "../../../Settings/store/features/prescriptions/types";
import logoIcon from "../../../assets/images/icons/logo-2.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {format} from 'date-fns'
import domtoimage from 'dom-to-image';

const NewDetails = () => {
  const location = useLocation();
  const [patientInfo, setPatientInfo] = useState<patientEasy>();
  const [medicineList, setMidicineList] = useState<medicine[]>([]);
  const [testsList, setTestsList] = useState<medicalFile[]>([]);
  const [radiologyList, setRadiologyList] = useState<medicalFile[]>([]);
  const [cardFile, setCardFile] = useState<medicalFile>();
  const [consultationDate, setConsultationDate] = useState<Date>(new Date());
  const [diagnosisInfo, setDiagnosisInfo] = useState<string>("");
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [bloodPressure, setBloodPressure] = useState<number>();
  const [heartbeats, setHeartbeats] = useState<number>();
  const [sugarRandom, setSugarRandom] = useState<number>();
  const [sugarBreakfast, setSugarBreakfast] = useState<number>();
  const [sugarFasting, setSugarFasting] = useState<number>();
  const [oxygen, setOxygen] = useState<number>();
  const [numberOfPregnancies, setNumberOfPregnancies] = useState<number>();
  const [numberOfNaturalBirths, setNumberOfNaturalBirths] = useState<number>();
  const [numberOfCesareanSections, setNumberOfCesareanSections] =
    useState<number>();
  const [numberOfMiscarriages, setNumberOfMiscarriages] = useState<number>();
  const [bloodType, setBloodType] = useState<string>();

  const [showPrescription, setShowPrescription] = useState<boolean>(false);

  const HandleShowPrescription = () => {
    setShowPrescription(true);
    if(prescriptionRef.current){
      printPrescription(prescriptionRef.current)
    }
  };
  const HandleHidePrescription = () => {
    setShowPrescription(false);
  };
  const prescription = useSelector(prescriptionState);
  const patientData = location.state;

  useEffect(() => {
    if (patientData) {
      setPatientInfo(patientData as patientEasy);
    }
  }, []);

  const prescriptionRef = useRef<HTMLDivElement|null>(null)

  const printPrescription = async (input:HTMLDivElement) => {
    if (input) {
      const canvas = await html2canvas(input,{
        width: input.scrollWidth - 200,
        height: input.scrollHeight,
        scale: 2
      })
      domtoimage.toPng(input,{
        width: input.scrollWidth + 200,
        height: input.scrollHeight
      }).then((dataUrl) => { // Adjust scale as needed
        // const imgData = canvas.toDataURL("image/jpeg");
        // const link = document.createElement('a');
        // link.href = dataUrl;
        // link.download = `${patientInfo?.code}_${format(consultationDate, 'yyyy-MM-dd')}.png`;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        const pdf = new jsPDF({
          orientation: "portrait", // or "landscape"
          unit: "px",
          format:[canvas.width, canvas.height],
          putOnlyUsedFonts: true,
          floatPrecision: 16 // or "smart", default is 16
        });
        const imgWidth = pdf.internal.pageSize.getWidth(); // Full width of the page
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
        // const imgHeight = (pdf.internal.pageSize.getHeight() * imgWidth) / 210;
        let heightLeft = imgHeight - pdf.internal.pageSize.getHeight()
  
        let position = 0;
  
        // Add the image to the PDF without padding
        pdf.addImage(dataUrl, "PNG",-180, position, imgWidth+350, imgHeight); // Set x=0 to remove left padding
  
        // // while (heightLeft >= 0) {
        //   pdf.addPage();
        //   position = heightLeft - imgHeight;
        //   pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight); // Set x=0 to remove left padding
        //   heightLeft -= pdf.internal.pageSize.getHeight(); // Adjust height left based on page size
        // // }
  
        pdf.save(`${patientInfo?.code}_${format(consultationDate, 'yyyy-MM-dd')}.pdf`);
      });
    }
  };

  return (
    <>
      <div
        className={`modal prescription ${showPrescription && "show"}`}
        onClick={(e) =>
          e.currentTarget === e.target && HandleHidePrescription()
        }
      >
        <div className="scroll-wrapper" 
        onClick={(e) =>
          e.currentTarget === e.target && HandleHidePrescription()
        }>
          <div ref={prescriptionRef} className="modal-container">
            <h4 className="heading">prescription</h4>
            <div className="prescription-header">
              <img src={logoIcon} alt="" />
              <div className="doctor-info">
                <h2 className="heading">Dr. {prescription.name.split(' ')[0]} {prescription.name.split(' ')[1]}</h2>
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
                  <h5 className="heading fw-bold">
                    address
                  </h5>
                  <h6 className="sub-text">
                    {'Mansoura Qesm 2nd st. 10'}
                  </h6>
                </div>
              </div>
              <div className="d-flex flex-column gap-3 align-items-end mt-3">
                <h2 className="heading fw-bold">
                  Hospital Name
                </h2>
                <p>+(02)123456789</p>
                <p>company@mail.com</p>
                <p>www.companyName.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PatientInfoCard key={1} patientInfo={patientInfo} />

      <section>
        <div className="form-group">
          <label htmlFor="diagnosisInfo" className="form-label heading fs-4">
            <img src={infoIcon} alt="" />
            Diagnosis Info
          </label>
          <textarea
            name="diagnosisInfo"
            id="diagnosisInfo"
            className="form-control"
            rows={4}
            value={diagnosisInfo}
            onChange={(e) => setDiagnosisInfo(e.currentTarget.value)}
          ></textarea>
        </div>
      </section>
      <section>
        <h4 className="heading">
          <img src={prescriptionIcon} alt="" />
          Consultation
        </h4>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="consultationDate" className="form-label">
                Consultation Date
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  name="consultationDate"
                  minDate={new Date()}
                  defaultValue={new Date()}
                  format="yyyy-MM-dd"
                  className="form-control"
                  value={consultationDate}
                  onChange={(value) => setConsultationDate(value as Date)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </section>

      <PrescriptionDetails
        key={2}
        medicineList={medicineList as medicine[]}
        setMedicineList={setMidicineList}
        Icon={prescriptionIcon}
      />

      <section>
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="height" className="form-label">
                height (CM)
              </label>
              <input
                type="number"
                min={0}
                name="height"
                id="height"
                className="form-control"
                value={height}
                onChange={(e) => setHeight(Number(e.currentTarget.value))}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="weight" className="form-label">
                weight (KG)
              </label>
              <input
                type="number"
                min={0}
                name="weight"
                id="weight"
                className="form-control"
                value={weight}
                onChange={(e) => setWeight(Number(e.currentTarget.value))}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="bloodPressure" className="form-label">
                Blood Pressure
              </label>
              <input
                type="number"
                min={0}
                name="bloodPressure"
                id="bloodPressure"
                className="form-control"
                value={bloodPressure}
                onChange={(e) =>
                  setBloodPressure(Number(e.currentTarget.value))
                }
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="Heartbeats" className="form-label">
                Heartbeats
              </label>
              <input
                type="number"
                min={0}
                name="Heartbeats"
                id="Heartbeats"
                className="form-control"
                value={heartbeats}
                onChange={(e) => setHeartbeats(Number(e.currentTarget.value))}
              />
            </div>
          </div>
          <div className="row pe-0 me-2 form-group col-12 col-xl-6">
            <label htmlFor="sugar" className="form-label m-0">
              sugar
            </label>
            <div className="col-12 col-lg-4 pe-0">
              <div className="form-group">
                <input
                  type="number"
                  min={0}
                  name="sugar"
                  id="sugar"
                  className="form-control"
                  placeholder="random"
                  value={sugarRandom}
                  onChange={(e) =>
                    setSugarRandom(Number(e.currentTarget.value))
                  }
                />
              </div>
            </div>
            <div className="col-12 col-lg-4 pe-0">
              <div className="form-group">
                <input
                  type="number"
                  min={0}
                  name="sugarBreakfast"
                  id="sugarBreakfast"
                  className="form-control"
                  placeholder="breakfast"
                  value={sugarBreakfast}
                  onChange={(e) =>
                    setSugarBreakfast(Number(e.currentTarget.value))
                  }
                />
              </div>
            </div>
            <div className="col-12 col-lg-4 pe-0">
              <div className="form-group">
                <input
                  type="number"
                  min={0}
                  name="sugarFasting"
                  id="sugarFasting"
                  className="form-control"
                  placeholder="fasting"
                  value={sugarFasting}
                  onChange={(e) =>
                    setSugarFasting(Number(e.currentTarget.value))
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="bloodType" className="form-label">
                Blood Type
              </label>
              <input
                type="text"
                name="Heartbeats"
                id="bloodType"
                className="form-control"
                value={bloodType}
                onChange={(e) => setBloodType(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="oxygen" className="form-label">
                oxygen
              </label>
              <input
                type="number"
                min={0}
                name="oxygen"
                id="oxygen"
                className="form-control"
                value={oxygen}
                onChange={(e) => setOxygen(Number(e.currentTarget.value))}
              />
            </div>
          </div>
          {prescription.specialization === specialization.GYNECOLOGIST && (
            <>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="form-group">
                  <label htmlFor="pregnancies" className="form-label">
                    Number of pregnancies
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="pregnancies"
                    id="pregnancies"
                    className="form-control"
                    value={numberOfPregnancies}
                    onChange={(e) =>
                      setNumberOfPregnancies(Number(e.currentTarget.value))
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="form-group">
                  <label htmlFor="naturalBirths" className="form-label">
                    Number of natural births
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="naturalBirths"
                    id="naturalBirths"
                    className="form-control"
                    value={numberOfNaturalBirths}
                    onChange={(e) =>
                      setNumberOfNaturalBirths(Number(e.currentTarget.value))
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="form-group">
                  <label htmlFor="cesareans" className="form-label">
                    cesarean sections
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="cesareans"
                    id="cesareans"
                    className="form-control"
                    value={numberOfCesareanSections}
                    onChange={(e) =>
                      setNumberOfCesareanSections(Number(e.currentTarget.value))
                    }
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="form-group">
                  <label htmlFor="miscarriages" className="form-label">
                    Number of miscarriages
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="miscarriages"
                    id="miscarriages"
                    className="form-control"
                    value={numberOfMiscarriages}
                    onChange={(e) =>
                      setNumberOfMiscarriages(Number(e.currentTarget.value))
                    }
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <MedicalFile
        key={4}
        testsList={testsList}
        setTestsList={setTestsList}
        heading="Medical Test"
        Icon={prescriptionIcon}
      />

      <MedicalFile
        key={5}
        testsList={radiologyList}
        setTestsList={setRadiologyList}
        heading="Medical Radiology"
        Icon={prescriptionIcon}
      />

      <CardFile
        key={6}
        cardFile={cardFile as medicalFile}
        setCardFile={setCardFile}
        Icon={prescriptionIcon}
      />

      <div className="d-flex gap-3 justify-content-center align-items-center my-3">
        <button className="btn btn-primary btn-submit">Save</button>
        <button
          className="btn btn-primary btn-submit"
          onClick={HandleShowPrescription}
        >
          <i className="fa fa-print mx-2" aria-hidden="true"></i>
          Print
        </button>
        <button className="btn btn-primary btn-submit">Done</button>
      </div>
    </>
  );
};

export default NewDetails;
