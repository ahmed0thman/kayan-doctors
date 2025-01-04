import React, { useState } from "react";
import ModalWarningDelete from "../../../Components/ModalWarningDelete/ModalWarningDelete";

const GridControls = ({
  handleRemove,
  handleEdit,
}: {
  handleRemove: any;
  handleEdit: any;
}) => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      {/* <ModalWarningDelete 
        show={show}
        handleOk={()=>{
          setShow(false)
          handleRemove()
        }}
        handleClose={()=>setShow(false)}
      /> */}
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-ouline-primary" onClick={handleEdit}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button className="btn btn-ouline-primary" onClick={e=>setShow(true)}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </button>
      </div>
    </>
  );
};

export default GridControls;
