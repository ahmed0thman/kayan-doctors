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
import {format} from 'date-fns'
import domtoimage from 'dom-to-image';
import PrescriptionForm from "../../../Components/Prescription/PrescriptionForm";

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


  return (
    <>
      <PrescriptionForm
      consultationDate={consultationDate}
      patientInfo={patientInfo}
      showPrescription={showPrescription}
      setShowPrescription={setShowPrescription}
    />
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
        {/* <button
          className="btn btn-primary btn-submit"
          onClick={HandleShowPrescription}
        >
          <i className="fa fa-print mx-2" aria-hidden="true"></i>
          Print
        </button>
        <button className="btn btn-primary btn-submit">Done</button> */}
      </div>
    </>
  );
};

export default NewDetails;
