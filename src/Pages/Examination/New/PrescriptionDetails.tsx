import React, { useEffect, useRef, useState } from "react";
import { medicine, Medicines } from "./types";
import MedicineEditor from "./MedicineEditor";
import PrescriptionForm from "../../../Components/Prescription/PrescriptionForm";

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
              keyId={index}
              medicineList={medicineList}
              setMedicineList={setMedicineList}
              currentElement={ele}
            />
          ))}
        <MedicineEditor
          key={medicineList.length + 1}
          keyId={medicineList.length + 1}
          medicineList={medicineList}
          setMedicineList={setMedicineList}
          focus={true}
        />
      </div>
    </section>
  );
};

export default PrescriptionDetails;
