import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { APP_DISPATCH } from "../../../Settings/store/store";
import { setActivePage } from "../../../Settings/store/features/activePage/activePageSlice";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import StatsCard from "./StatsCard";
import maleFemaleICon from "./imgs/male-female.svg";
import maleICon from "./imgs/male.svg";
import femaleICon from "./imgs/female.svg";
import newICon from "./imgs/new.svg";
import resumptICon from "./imgs/resumpt.svg";
import DataGrid from "../../../Components/DataGrid/DataGrid";
import { oldPateint, patientEasy } from "../../Easy/OldPatients/types";


const PatientChart = () => {
  const dispatch = useDispatch<APP_DISPATCH>();
  dispatch(setActivePage("Patients Chart"));

  const [patients, setPatients] = useState<patientEasy[]>(oldPateint);

  // const [selectionRange, setSelectionRange] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // });

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  const HandleSelectRange = (ranges: any) => {
    console.log(ranges);
  };
  return (
    <>
      <section>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                gender
              </label>
              <select name="gender" id="gender" className="form-select">
                <option value="">select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="gender" className="form-label">
                type
              </label>
              <select name="type" id="type" className="form-select">
                <option value="">select type</option>
                <option value="new">new</option>
                <option value="resumption">resumption</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="startDate" className="form-label">
                start date
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  name="startDate"
                  defaultValue={new Date()}
                  format="yyyy-MM-dd"
                  className="form-control"
                  views={["year", "month", "day"]}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="endDate" className="form-label">
                end date
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  name="endDate"
                  defaultValue={new Date()}
                  format="yyyy-MM-dd"
                  className="form-control"
                  views={["year", "month", "day"]}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="services" className="form-label">
                services
              </label>
              <select name="services" id="services" className="form-select">
                <option value="">select service</option>
              </select>
            </div>
          </div>
        </div>

        <div className="patient-stats">
          <StatsCard img={maleFemaleICon} title={"All"} value={25} />
          <StatsCard img={maleICon} title={"Male"} value={25} />
          <StatsCard img={femaleICon} title={"Female"} value={25} />
          <StatsCard img={newICon} title={"New"} value={25} />
          <StatsCard img={resumptICon} title={"Resumpt"} value={25} />
        </div>
      </section>
      <DataGrid
        dataSource={patients}
        columns={patients[0]}
        filter={false}
        pageSize={4}
      />
    </>
  );
};

export default PatientChart;
