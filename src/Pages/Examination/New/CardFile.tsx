import React, { useState } from "react";
import { medicalFile } from "./types";

const CardFile = ({
  Icon,
  cardFile,
  setCardFile
}:{
  cardFile: medicalFile,
  setCardFile: any,
  Icon?:any
}) => {
  return (
    <section>
      <h4 className="heading">
        <img src={Icon} alt="" />
        Card
      </h4>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="cardName" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="cardName"
              id="cardName"
              className="form-control"
              placeholder="Please enter card Name"
              value={cardFile?.name}
              onChange={(e) => setCardFile({...cardFile, name:e.currentTarget.value})}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="cardFile" className="form-label">
              File
            </label>
            <input
              type="file"
              name="cardFile"
              id="cardFile"
              className="form-control"
              placeholder="No Chosen File"
              value={cardFile?.file}
              onChange={(e) => setCardFile({...cardFile, file:e.currentTarget.value})}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="cardNote" className="form-label">
              Note
            </label>
            <input
              type="text"
              name="cardNote"
              id="cardNote"
              className="form-control"
              placeholder="Please enter card Note"
              value={cardFile?.note}
              onChange={(e) => setCardFile({...cardFile, note:e.currentTarget.value})}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFile;
