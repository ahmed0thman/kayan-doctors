import React, { useState } from 'react'
import DataGrid from '../../../Components/DataGrid/DataGrid';
import { oldPateint, patientEasy } from '../../Easy/OldPatients/types';
import { APP_DISPATCH } from '../../../Settings/store/store';
import { setActivePage } from '../../../Settings/store/features/activePage/activePageSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RowDoubleClickedEvent } from 'ag-grid-community';

const AllPatients = () => {
  const [allPatient, setAllPatients] = useState<patientEasy[]>(oldPateint)
  const dispatch = useDispatch<APP_DISPATCH>();
  dispatch(setActivePage('All Patients'))
  const navigate = useNavigate();

  const HandleRowDblClicked = (e: RowDoubleClickedEvent<patientEasy>)=>{
    navigate(`/patients/archive/${e.data?.code}`, { state: e.data })
  }
  return(
    <DataGrid
      columns={allPatient[0]}
      dataSource={allPatient}
      onRowDoubleClicked={HandleRowDblClicked}
    />
  )
}

export default AllPatients