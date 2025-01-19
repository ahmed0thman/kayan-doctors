import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PatientInfoCard from "../../../../Components/PatientInfoCard/PatientInfoCard";
import { patientEasy } from "../../../Easy/OldPatients/types";
import infoIcon from "../../../../assets/images/icons/info.svg";
import prescriptionIcon from "../../../../assets/images/icons/prescription.svg";
import { medicalFile, medicine } from "../../../Examination/New/types";
import { useSelector } from "react-redux";
import { prescriptionState } from "../../../../Settings/store/features/prescriptions/prescriptionSlice";
import { specialization } from "../../../../Settings/store/features/prescriptions/types";
import PrescriptionCard from "./PrescriptionCard";
import DataGrid from "../../../../Components/DataGrid/DataGrid";
import MedicineGrid from "./MedicineGrid";
import MedicalFilesGrid from "./MedicalFilesGrid";
import PhysicalInfoGrid from "./PhysicalInfoGrid";
import { physicalData, physicalDataChildren, physicalDataWomen, physicalInfoChildren, physicalInfoGeneral, physicalInfoWomen } from "./types";
import Gallery from "../../../../Components/Gallery/Gallery";


const PatientArchive = () => {
  const prescription = useSelector(prescriptionState);
  const location = useLocation();
  const patientData = location.state;
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [patientInfo, setPatientInfo] = useState<patientEasy>();
  let patientPhysicalInfo:physicalData[]|physicalDataChildren[]|physicalDataWomen[]
  if(prescription.specialization === specialization.PEDIATRICIAN){
    patientPhysicalInfo = physicalInfoChildren
  }
  else if(prescription.specialization === specialization.GYNECOLOGIST){
    patientPhysicalInfo = physicalInfoWomen
  }
  else{
    patientPhysicalInfo = physicalInfoGeneral
  }


  const [archiveShow, setArchiveShow] = useState<boolean>(true);
  const HandleShowGallery = () => setShowGallery(true);
  const HandleHideGallery = () => setShowGallery(false);
  const HandleSetAllShow = () => setArchiveShow(true);
  const HandleSetOnlyShow = () => setArchiveShow(false);

  const [isUpdatingBodyInfo, setIsUpdatingBodyInfo] = useState<boolean>(false);

  const [medicalTestsFiles, setMedicalTestsFiles] = useState<medicalFile[]>([
    { name: "Blood Test", file: "blood_test.pdf", note: "Blood test results", date: new Date('2022-01-01') },
    { name: "MRI Scan", file: "mri_scan.pdf", note: "MRI scan results", date: new Date('2022-02-15') },
    { name: "ECG", file: "ecg.pdf", note: "ECG results", date: new Date('2022-03-20') },
    { name: "X-Ray", file: "x_ray.pdf", note: "X-Ray results", date: new Date('2022-04-10') },
    { name: "Ultrasound", file: "ultrasound.pdf", note: "Ultrasound results", date: new Date('2022-05-05') },
    { name: "CT Scan", file: "ct_scan.pdf", note: "CT scan results", date: new Date('2022-06-01') },
    { name: "Blood Pressure Test", file: "blood_pressure_test.pdf", note: "Blood pressure test results", date: new Date('2022-07-15') },
    { name: "Glucose Test", file: "glucose_test.pdf", note: "Glucose test results", date: new Date('2022-08-20') },
    { name: "Cholesterol Test", file: "cholesterol_test.pdf", note: "Cholesterol test results", date: new Date('2022-09-10') },
    { name: "Thyroid Function Test", file: "thyroid_function_test.pdf", note: "Thyroid function test results", date: new Date('2022-10-01') },
  ]);

  const [medicalRadiologyFiles, setMedicalRadiologyFiles] = useState<medicalFile[]>([
    { name: "Chest X-Ray", file: "chest_x_ray.pdf", note: "Chest X-Ray results", date: new Date('2022-01-01') },
    { name: "Abdominal Ultrasound", file: "abdominal_ultrasound.pdf", note: "Abdominal Ultrasound results", date: new Date('2022-02-15') },
    { name: "Cardiac MRI", file: "cardiac_mri.pdf", note: "Cardiac MRI results", date: new Date('2022-03-20') },
    { name: "Bone Density Test", file: "bone_density_test.pdf", note: "Bone Density Test results", date: new Date('2022-04-10') },
    { name: "Mammogram", file: "mammogram.pdf", note: "Mammogram results", date: new Date('2022-05-05') },
    { name: "PET Scan", file: "pet_scan.pdf", note: "PET Scan results", date: new Date('2022-06-01') },
    { name: "Colonoscopy", file: "colonoscopy.pdf", note: "Colonoscopy results", date: new Date('2022-07-15') },
    { name: "Endoscopy", file: "endoscopy.pdf", note: "Endoscopy results", date: new Date('2022-08-20') },
    { name: "Pulmonary Function Test", file: "pulmonary_function_test.pdf", note: "Pulmonary Function Test results", date: new Date('2022-09-10') },
    { name: "Electrocardiogram (ECG)", file: "ecg.pdf", note: "ECG results", date: new Date('2022-10-01') },
  ]);

  const [cardFiles, setCardsFiles] = useState<medicalFile[]>([
    { name: `${patientData.name}`, note: "Patient card information", file: "patient_card.pdf",date: new Date('2022-01-01') },
    { name: `${patientData.name}`, note: "Patient card information", file: "patient_card.pdf",date: new Date('2022-03-01') },
    { name: `${patientData.name}`, note: "Patient card information", file: "patient_card.pdf",date: new Date('2022-06-01') },
  ]);

  

  
  useEffect(() => {
    if (patientData) {
      setPatientInfo(patientData as patientEasy);
    }
  }, []);
  return (
    <>
    <Gallery 
      showGallery={showGallery}
      hideGallery={HandleHideGallery}
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
            readOnly={!isUpdatingBodyInfo}
            disabled={!isUpdatingBodyInfo}
          ></textarea>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="heading">
            {(archiveShow && "Prescriptions") || "Prescription Details"}
          </h4>
          <div className="d-flex gap-2">
            <span
              className={`btn ${
                (archiveShow && "btn-primary") || "btn-secondary"
              } p-2`}
              onClick={HandleSetOnlyShow}
            >
              Only
            </span>
            <span
              className={`btn ${
                (!archiveShow && "btn-primary") || "btn-secondary"
              } p-2 px-3`}
              onClick={HandleSetAllShow}
            >
              All
            </span>
          </div>
        </div>
      </section>

      {(archiveShow && (
        <>
          <PrescriptionCard
            patientInfo={patientInfo}
            HandleOnlyShow={HandleSetOnlyShow}
          />
          <PrescriptionCard
            patientInfo={patientInfo}
            HandleOnlyShow={HandleSetOnlyShow}
          />
          <PrescriptionCard
            patientInfo={patientInfo}
            HandleOnlyShow={HandleSetOnlyShow}
          />
        </>
      )) || (
        <>
        {!archiveShow && 
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
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
                  readOnly={!isUpdatingBodyInfo}
                  disabled={!isUpdatingBodyInfo}

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
                  readOnly={!isUpdatingBodyInfo}
                  disabled={!isUpdatingBodyInfo}
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
                  readOnly={!isUpdatingBodyInfo}
                  disabled={!isUpdatingBodyInfo}
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
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
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
              />
            </div>
          </div>
          {
            prescription.specialization === specialization.PEDIATRICIAN  &&
            <>
              <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="visionQuality" className="form-label">
                Vision Quality
              </label>
              <input
                type="text"
                name="visionQuality"
                id="visionQuality"
                className="form-control"
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <div className="form-group">
              <label htmlFor="hearingMeasurement" className="form-label">
                Hearing Measurement
              </label>
              <input
                type="number"
                min={0}
                name="hearingMeasurement"
                id="hearingMeasurement"
                className="form-control"
                readOnly={!isUpdatingBodyInfo}
                disabled={!isUpdatingBodyInfo}
              />
            </div>
          </div>
            </>
          }
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
                    readOnly={!isUpdatingBodyInfo}
                    disabled={!isUpdatingBodyInfo}
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
                    readOnly={!isUpdatingBodyInfo}
                    disabled={!isUpdatingBodyInfo}
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
                    readOnly={!isUpdatingBodyInfo}
                    disabled={!isUpdatingBodyInfo}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <div className="form-group">
                  <label htmlFor="miscarriages" 
                  className="form-label">
                    Number of miscarriages
                  </label>
                  <input
                    type="number"
                    min={0}
                    name="miscarriages"
                    id="miscarriages"
                    className="form-control"
                    readOnly={!isUpdatingBodyInfo}
                    disabled={!isUpdatingBodyInfo}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      }
          <section>
            <h4 className="heading">
              Consultation Data: <span className="px-2">2023-12-06</span>
            </h4>
          </section>
        </>
      )}

      

      <section>
        <h4 className="heading">
          Medicine Details
        </h4>
      </section>
      <MedicineGrid/>

      <section>
        <h4 className="heading">
          Patient physical details
        </h4>
      </section>
      <PhysicalInfoGrid 
        patientPhysicalInfo={patientPhysicalInfo}
      />

      
      <section>
        <h4 className="heading">
          Medical Tests Details
        </h4>
      </section>
      <MedicalFilesGrid
        files={medicalTestsFiles}
        showGallery={HandleShowGallery}
      />

      <section>
        <h4 className="heading">
          Medical Radiology Details
        </h4>
      </section>
      <MedicalFilesGrid
        files={medicalRadiologyFiles}
        showGallery={HandleShowGallery}
      />

      <section>
        <h4 className="heading">
          Cards
        </h4>
      </section>
      <MedicalFilesGrid
        files={cardFiles}
        showGallery={HandleShowGallery}
      />
    </>
  );
};

export default PatientArchive;
