import React, { useState } from 'react'
import DataGrid from '../../Components/DataGrid/DataGrid'
import { drEasyPatient, pateints } from './types'

const DrEasy = () => {
  const [allPatient, setAllPatient] = useState<drEasyPatient[]>(pateints)
  return (
    <DataGrid
    // dataSource={posts}
    // columns={columnDefs}
    dataSource={allPatient}
    columns={pateints[0]}
    pageSize={7}
    colWidth={170}
    // onGridReady={onGridReady}
  />
  )
}

export default DrEasy