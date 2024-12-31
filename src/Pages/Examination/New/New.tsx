import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../../Settings/store/store'
import { setActivePage } from '../../../Settings/store/features/activePage/activePageSlice';
import DataGrid from '../../../Components/DataGrid/DataGrid';
import { RowDoubleClickedEvent } from 'ag-grid-community';
import { oldPateint, patientEasy } from '../../Easy/OldPatients/types';
import { useNavigate } from 'react-router-dom';
const New = () => {
  const [allPatient, setAllPatients] = useState<patientEasy[]>(oldPateint)
  const dispatch = useDispatch<APP_DISPATCH>();
  dispatch(setActivePage('Today New Examination'))
  const navigate = useNavigate();

  const HandleRowDblClicked = (e: RowDoubleClickedEvent<patientEasy>)=>{
    navigate(`/examination/new/${e.data?.code}`, { state: e.data })
  }
  return(
    <DataGrid
      columns={allPatient[0]}
      dataSource={allPatient}
      onRowDoubleClicked={HandleRowDblClicked}
    />
  )
}

export default New