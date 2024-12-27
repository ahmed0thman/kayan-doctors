import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../Components/DataGrid/DataGrid'
import { patients, patient } from '../../types'

const OldReservation = () => {

  const [allPatients, setAllPatients] = useState<any>(patients);
  
  useEffect(()=>{
    
  }, [])
  return (
    <DataGrid
        // dataSource={posts}
        // columns={columnDefs}
        dataSource={allPatients}
        columns={patients[0]}
        // onGridReady={onGridReady}
      />
  )
}

export default OldReservation