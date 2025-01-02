import React from "react";

const GridControls = () => {
  return (
    <div className="d-flex gap-2 align-items-center justify-content-center">
      <button className="btn btn-ouline-primary">
        <i className="fa fa-close" aria-hidden="true"></i>
      </button>
      <button className="btn btn-ouline-primary">
        <i className="fa fa-repeat" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default GridControls;
