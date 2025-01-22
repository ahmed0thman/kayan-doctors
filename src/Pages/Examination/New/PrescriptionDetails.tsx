import React, { useEffect, useRef, useState } from "react";
import { medicine, Medicines } from "./types";
import MedicineEditor from "./MedicineEditor";

const PrescriptionDetails = ({
  medicineList,
  setMedicineList,
  Icon,
}: {
  medicineList: medicine[];
  setMedicineList: any;
  Icon?: any;
}) => {
  

  return (
    <section>
      <h4 className="heading">
        <img src={Icon} alt="" />
        Prescription Details
      </h4>
      <div className="form-control medicine-editor">
        {medicineList.length > 0 &&
          medicineList.map((ele, index) => (
            <MedicineEditor
              key={index}
              medicineList={medicineList}
              setMedicineList={setMedicineList}
              currentElement={ele}
            />
          ))}
        <MedicineEditor
              key={medicineList.length+1}
              medicineList={medicineList}
              setMedicineList={setMedicineList}
            />
      </div>
      {/* <button
        className="btn btn-primary btn-submit"
        onClick={HandleAddMedicine}
      >
        add
      </button> */}
      {/* {medicineList.length > 0 && (
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
              {medicineList.map((ele, i) => (
                <tr key={i}>
                  <td>{ele.name}</td>
                  <td>{ele.dose}</td>
                  <td>{ele.time}</td>
                  <td>{ele.note}</td>
                  <td className="actions">
                    <button
                      className="btn text-info"
                      onClick={() => HandleEditMedcine(ele.name)}
                    >
                      <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn text-danger"
                      onClick={() => HandleRemoveMedicine(ele.name)}
                    >
                      <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </section>
  );
};

export default PrescriptionDetails;
