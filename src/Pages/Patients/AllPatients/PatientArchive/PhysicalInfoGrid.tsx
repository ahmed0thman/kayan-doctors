import React, { useState } from 'react'
import DataGrid from '../../../../Components/DataGrid/DataGrid'
import { physicalData, physicalDataChildren, physicalDataWomen } from './types'

const PhysicalInfoGrid = ({patientPhysicalInfo}:
  {patientPhysicalInfo:physicalData[]|physicalDataChildren[]|physicalDataWomen[]}) => {
  const [physicalInfo, setPhysicalInfo] = useState<physicalData[]|physicalDataChildren[]|physicalDataWomen[]>(patientPhysicalInfo)
  return (
    <DataGrid
      dataSource={physicalInfo}
      columns={physicalInfo[0]}
      filter={false}
    /> 
  )
}

export default PhysicalInfoGrid