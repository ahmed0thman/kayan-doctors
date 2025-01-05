import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { input } from "./types";
import DataGrid from "../../../Components/DataGrid/DataGrid";
import NoData from "../../../Components/NoData";
import { ColDef } from "ag-grid-community";
import { CustomCellRendererProps } from "ag-grid-react";
import GridControls from "./GridControls";
import ModalWarningDelete from "../../../Components/ModalWarningDelete/ModalWarningDelete";

const Inputs = () => {
  const [dateFrom, setDateFrom] = useState<Date>(new Date());
  const [dateTo, setDateTo] = useState<Date>(new Date());
  const [showInputsModal, setShowInputsModal] = useState<boolean>(false);
  const [showDeleteMsg, setShowDeleteMsg] = useState<boolean>(false)
  const [inputToDelete, setInputToDelete] = useState<number>(0);
  const [inputToEdit, setInputToEdit] = useState<input>();
  const [input, setInput] = useState<string>("");
  const [inputTotal, setInputTotal] = useState<number>(0);
  const [inputDate, setInputDate] = useState<Date>(new Date());
  const [allInputs, setAllInputs] = useState<input[]>([]);
  const [inputsColumns, setInputsColumns] = useState<ColDef[]>([
    {
      field: "#" as any,
      width: 120,
      valueGetter: (params: any) => params.node.rowIndex + 1,
    },
    {
      field: "title",
      headerName: "input",
      flex: 1,
      minWidth: 150,
      filter: true,
    },
    {
      field: "total",
      flex: 0.6,
      minWidth: 80,
      filter: true,
    },
    {
      field: "date",
      flex: 0.8,
      minWidth: 120,
      filter: true,
    },
    {
      field: "control",
      flex: 0.8,
      minWidth: 150,
      sortable: false,
      cellRenderer: (props: CustomCellRendererProps) => {
        const input: input = props.data as input;
        return (
          <GridControls
            handleEdit={() => setInputToEdit((old) => input)}
            handleShowDeleteMsg={()=>HandleRemoveInput(input.id)}
          />
        );
      },
    },
  ]);

  const handleOpenInputsModal = () => setShowInputsModal(true);
  const handleCloseInputsModal = () => {
    setShowInputsModal(false);
    setInput("");
    setInputTotal(0);
    setInputDate(new Date());
  };

  const handleSaveNewInput = () => {
    const newInput: input = {
      id: (inputToEdit && inputToEdit.id)||allInputs.length + 1,
      title: input,
      total: inputTotal,
      date: inputDate,
    };
    setAllInputs((prevInputs) => [...allInputs, newInput].sort((a:input,b:input)=> a.id>b.id?1:a.id===b.id?0:-1));
    handleCloseInputsModal();
  };

  const deleteInput = (id: number) => {
    const newInputs = allInputs.filter((ele:input) => ele.id !== id);
    setAllInputs(newInputs);
  };

  const HandleRemoveInput = (id:number) =>{
    setShowDeleteMsg(true)
    setInputToDelete(id)
  }

  const editInput = (input: input) => {
    deleteInput(input.id);
    handleOpenInputsModal();
    setInput(input.title);
    setInputTotal(input.total);
    setInputDate(input.date);
  };

  useEffect(()=>{
    if(inputToEdit){
      editInput(inputToEdit)
    }
  },[inputToEdit])

  
  return (
    <>
      <ModalWarningDelete
        show={showDeleteMsg}
        handleOk={() => {
          setShowDeleteMsg(false);
          deleteInput(inputToDelete);
        }}
        handleClose={() => setShowDeleteMsg(false)}
      />
      <div className={`modal ${showInputsModal && "show"}`}>
        <div
          className="modal-container"
          style={{ width: "80vw", maxWidth: "990px" }}
        >
          <span
            className="btn btn-close"
            onClick={handleCloseInputsModal}
          ></span>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="inputTitle" className="form-label">
                  input
                </label>
                <input
                  type="text"
                  name="inputTitle"
                  id="inputTitle"
                  className="form-control"
                  placeholder="enter input title"
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value as string)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="total" className="form-label">
                  total
                </label>
                <input
                  type="number"
                  min={0}
                  name="total"
                  id="total"
                  className="form-control"
                  placeholder="enter total cost"
                  value={inputTotal}
                  onChange={(e) => setInputTotal(Number(e.currentTarget.value))}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  Date
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
                    name="date"
                    value={inputDate}
                    onChange={(date) => setInputDate(date as Date)}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-submit"
            onClick={handleSaveNewInput}
          >
            save
          </button>
        </div>
      </div>

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
        <button
          className="btn btn-primary btn-submit mt-2"
          onClick={handleOpenInputsModal}
        >
          <i className="fa fa-plus mx-1" aria-hidden="true"></i>
          new inputs
        </button>
      </section>
      {(allInputs.length > 0 && (
        <DataGrid
          dataSource={allInputs}
          columns={inputsColumns}
          filter={false}
        />
      )) || <NoData />}
    </>
  );
};

export default Inputs;
