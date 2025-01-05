import React, { useState } from "react";

const GridControls = ({
  handleShowDeleteMsg,
  handleEdit,
}: {
  handleShowDeleteMsg: any;
  handleEdit: any;
}) => {
  
  return (
    <>
      
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-ouline-primary" onClick={handleEdit}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button className="btn btn-ouline-primary" onClick={handleShowDeleteMsg}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default GridControls;
