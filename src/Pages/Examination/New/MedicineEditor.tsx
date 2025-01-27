import React, { useEffect, useRef, useState } from 'react'
import { medicine, Medicines } from './types';


const MedicineEditor = ({
    medicineList,
  setMedicineList,
  currentElement,
}:{
    medicineList: medicine[];
    setMedicineList: any;
    currentElement?: medicine|null
}) => {
    const [medicineName, setMedicineName] = useState<string>("");
  const [medicineDose, setMedicineDose] = useState<string>("");
  const [medicineTime, setMedicineTime] = useState<string>("");
  const [medicineNote, setMedicineNote] = useState<string>("");
  const [nameEntered, setNameEntered] = useState<boolean>(false);
  const [doseEntered, setDoseEntered] = useState<boolean>(false);
  const [timeEntered, setTimeEntered] = useState<boolean>(false);
  const [noteEntered, setNoteEntered] = useState<boolean>(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const doseInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const noteInputRef = useRef<HTMLInputElement>(null);
  const [medicineSuggestion, setMedicineSuggestion] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleFilterdMedicine = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value;
    setMedicineName(input);
    if (input.trim().length === 0) {
      setShowSuggestions(false);
      return;
    }
    const filteredMedicines = Medicines.filter((ele: string) => {
      return ele.toLowerCase().includes(input.toLowerCase());
    });

    setMedicineSuggestion(filteredMedicines);
    setShowSuggestions(true);
  };

  const handleSelectedSuggestion = (text: string) => {
    setMedicineName(text);
    setNameEntered(true);
    doseInputRef.current?.focus();
    setShowSuggestions(false);
  };

  const HandleAddMedicine = () => {
    const newMedicine: medicine = {
      name: medicineName,
      dose: medicineDose,
      time: medicineTime,
      note: medicineNote,
    };
    setMedicineList([...medicineList, newMedicine]);
    // setMedicineName("");
    // setMedicineDose("");
    // setMedicineTime("");
    // setMedicineNote("");
    // setNameEntered(false);
    // setTimeEntered(false);
    // setDoseEntered(false);
  };

  const HandleRemoveMedicine = (name: string) => {
    const newMedicineList: medicine[] = medicineList.filter(
      (ele) => ele.name !== name
    );
    setMedicineList(newMedicineList);
  };

  const HandleEditMedcine = (name: string) => {
    const itemToUpdate: medicine = medicineList.find(
      (ele) => ele.name === name
    ) as medicine;
    if (itemToUpdate) {
      setMedicineName(itemToUpdate.name);
      setMedicineDose(itemToUpdate.dose);
      setMedicineTime(itemToUpdate.time);
      setMedicineNote(itemToUpdate.note as string);
      HandleRemoveMedicine(name);
    }
  };

  useEffect(()=>{
    if(currentElement){
        setMedicineName(currentElement.name)
        setMedicineDose(currentElement.dose)
        setMedicineTime(currentElement.time)
        setMedicineNote(currentElement.note || '')
        setNameEntered(true);
        setTimeEntered(true);
        setDoseEntered(true);

    }
    else{
      nameInputRef.current?.focus()
    }
  },[])
  useEffect(() => {
    if (nameEntered) {
      doseInputRef.current?.focus();
    }
  }, [nameEntered]);

  useEffect(() => {
    if (doseEntered) {
      timeInputRef.current?.focus();
    }
  }, [doseEntered]);

  useEffect(() => {
    if (timeEntered) {
      noteInputRef.current?.focus();
    }
  }, [timeEntered]);

  useEffect(() => {
    if (noteEntered) {
      nameInputRef.current?.focus();
    }
  }, [noteEntered]);
  return (
    <>
        <div className="form-group input-suggestion">
          <span>RX/</span>
          <input
            ref={nameInputRef}
            type="text"
            name="medicineName"
            id="medicineName"
            className="form-control"
            placeholder="Enter Medicine Name"
            value={medicineName}
            onChange={handleFilterdMedicine}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setNameEntered(true);
              }
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 1000)}
          />
          {showSuggestions && (
            <ul className="suggestions-list">
              {medicineSuggestion.length ? (
                medicineSuggestion.map((ele) => (
                  <li onClick={() => handleSelectedSuggestion(ele)}>{ele}</li>
                ))
              ) : (
                <li>No Suggestions available</li>
              )}
            </ul>
          )}
        </div>

        <div className="d-flex flex-wrap px-4">
          {nameEntered && (
            <div className="form-group flex-group">
              <input
                ref={doseInputRef}
                type="text"
                name="medicineDose"
                id="medicineDose"
                className="form-control"
                placeholder="Dose"
                value={medicineDose}
                onChange={(e) => setMedicineDose(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setDoseEntered(true);
                  }
                }}
              />
            </div>
          )}
          {doseEntered && (
            <div className="form-group flex-group">
              <input
                ref={timeInputRef}
                type="text"
                name="medicineTime"
                id="medicineTime"
                className="form-control"
                placeholder="Time"
                value={medicineTime}
                onChange={(e) => setMedicineTime(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setTimeEntered(true);
                  }
                }}
              />
            </div>
          )}

          {timeEntered && (
            <div className="form-group col-12">
              <input
                ref={noteInputRef}
                type="text"
                name="medicineNote"
                id="medicineNote"
                className="form-control"
                placeholder="Any Notes!"
                value={medicineNote}
                onChange={(e) => setMedicineNote(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    
                    setNoteEntered(true);
                    if(currentElement){
                      return
                    }
                    HandleAddMedicine();
                  }
                }}
              />
            </div>
          )}
        </div>
    </>
  )
}

export default MedicineEditor