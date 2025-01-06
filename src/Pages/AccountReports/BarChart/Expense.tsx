import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React, { useState } from "react";
import { patientExpense, patients } from "./types";
import DataGrid from "../../../Components/DataGrid/DataGrid";
import NoData from "../../../Components/NoData";
import StatsCard from "../../Home/StatsCard";
import { statsCard } from "../../Home/types";
import { statsCardList } from "../../Home/statsCardList";

interface propsType {
  netProfit?: boolean;
}

const Expense = ({ netProfit }: propsType) => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [allPatients, setAllPatients] = useState<patientExpense[]>(patients);
  const [statsList, setStatsList] = useState(statsCardList());
  return (
    <>
      <section>
        <h4 className="heading justify-content-center mb-3 fw-bold">
          <i className="fa fa-calendar me-3" aria-hidden="true"></i>
          {format(dateFrom, "yyyy MMM dd")}
          <i className="fa fa-arrow-right mx-2" aria-hidden="true"></i>
          {format(dateTo, "yyyy MMM dd")}
        </h4>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="dateFrom" className="form-label">
                From
              </label>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={enUS}
              >
                <DatePicker
                  className="form-control"
                  defaultValue={new Date()}
                  views={["year", "month", "day"]}
                  format="yyyy-MM-dd"
                  name="dateFrom"
                  value={dateFrom}
                  onChange={(date) => setDateFrom(date as Date)}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="dateTo" className="form-label">
                to
              </label>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={enUS}
              >
                <DatePicker
                  className="form-control"
                  defaultValue={new Date()}
                  views={["year", "month", "day"]}
                  format="yyyy-MM-dd"
                  name="dateTo"
                  value={dateTo}
                  onChange={(date) => setDateTo(date as Date)}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {netProfit && (
        <div className="home m-0">
          <div className="cards">
            {statsList.map((ele: statsCard, index) => (
              <StatsCard key={index} stats={ele} />
            ))}
          </div>
        </div>
      )}
      </section>

      {(allPatients.length > 0 && (
        <DataGrid
          dataSource={allPatients}
          columns={allPatients[0]}
          filter={false}
        />
      )) || <NoData />}
    </>
  );
};

export default Expense;
