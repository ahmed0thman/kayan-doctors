import React, { useState } from "react";
import { medicine } from "./types";

const PrescriptionDetails = ({
  medicineList,
  setMedicineList,
  Icon
}: {
  medicineList: medicine[];
  setMedicineList: any;
  Icon?:any
}) => {
  const [medicineName, setMedicineName] = useState<string>("");
  const [medicineDose, setMedicineDose] = useState<string>("");
  const [medicineTime, setMedicineTime] = useState<string>("");
  const [medicineNote, setMedicineNote] = useState<string>("");

  const HandleAddMedicine = () => {
    const newMedicine: medicine = {
      name: medicineName,
      dose: medicineDose,
      time: medicineTime,
      note: medicineNote,
    };
    setMedicineList([...medicineList, newMedicine]);
    setMedicineName("");
    setMedicineDose("");
    setMedicineTime("");
    setMedicineNote("");
  };

  const HandleRemoveMedicine = (name:string) =>{
    const newMedicineList:medicine[] = medicineList.filter(ele => ele.name !== name)
    setMedicineList(newMedicineList)
  }

  const HandleEditMedcine = (name:string) =>{
    const itemToUpdate:medicine = medicineList.find(ele=> ele.name === name) as medicine
    if(itemToUpdate){
      setMedicineName(itemToUpdate.name)
      setMedicineDose(itemToUpdate.dose)
      setMedicineTime(itemToUpdate.time)
      setMedicineNote(itemToUpdate.note as string)
      HandleRemoveMedicine(name)
    }
  }
  return (
    <section>
      <h4 className="heading">
        <img src={Icon} alt="" />
        Prescription Details</h4>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="medicineName" className="form-label">
              Medicine Name
            </label>
            <input
              type="text"
              name="medicineName"
              id="medicineName"
              className="form-control"
              placeholder="Please enter Medicine Name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="medicineDose" className="form-label">
              Medicine Dose
            </label>
            <input
              type="text"
              name="medicineDose"
              id="medicineDose"
              className="form-control"
              placeholder="Please enter Medicine Dose"
              value={medicineDose}
              onChange={(e) => setMedicineDose(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="form-group">
            <label htmlFor="medicineTime" className="form-label">
              Medicine Time
            </label>
            <input
              type="text"
              name="medicineTime"
              id="medicineTime"
              className="form-control"
              placeholder="Please enter Medicine Time"
              value={medicineTime}
              onChange={(e) => setMedicineTime(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="medicineNote" className="form-label">
              Medicine Note
            </label>
            <input
              type="text"
              name="medicineNote"
              id="medicineNote"
              className="form-control"
              placeholder="Please enter Medicine Note"
              value={medicineNote}
              onChange={(e) => setMedicineNote(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary btn-submit"
        onClick={HandleAddMedicine}
      >
        add
      </button>
      {
        medicineList.length > 0 && 
        <div className="custom-table">
          <table className="data-table medicine-table">
        <thead>
          <tr>
            <td>Medicine Name</td>
            <td>Dose</td>
            <td>Time</td>
            <td>Note</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {medicineList.map((ele,i) =>
            <tr key={i}>
            <td>{ele.name}</td>
            <td>{ele.dose}</td>
            <td>{ele.time}</td>
            <td>{ele.note}</td>
            <td className='actions'>
              <button className="btn text-info"
              onClick={()=>HandleEditMedcine(ele.name)}>
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger"
              onClick={()=>HandleRemoveMedicine(ele.name)}>
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
        </div>
      }
    </section>
  );
};

export default PrescriptionDetails;
