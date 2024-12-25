import React, { useState } from 'react'
import DataGrid from '../../Components/DataGrid/DataGrid'
import { drEasyPatient, pateints } from '../DrEasy/types'

const ReExamination = () => {
  const [allPatient, setAllPatient] = useState<drEasyPatient[]>(pateints)
  return (
    <DataGrid
    // dataSource={posts}
    // columns={columnDefs}
    dataSource={allPatient}
    columns={pateints[0]}
    pageSize={8}
    colWidth={170}
    // onGridReady={onGridReady}
  />
  )
}

export default ReExamination