import React, { useState } from 'react'
import DataGrid from '../../Components/DataGrid/DataGrid'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setActivePage } from '../../Settings/store/features/activePage/activePageSlice'
import { patientFollowing, patientsFollowingList } from './types'
import {
  ColDef,
} from "ag-grid-community";
import { CustomCellRendererProps } from 'ag-grid-react'
import ExaminationTypeBadge from './ExaminationTypeBadge'
import ArriveStatusButton from './ArriveStatusButton'

const FollowingUp = () => {
  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Following Up'))
  const [patients, setPatients] = useState<patientFollowing[]>(patientsFollowingList)

  const columns:ColDef[] = [
    {
      field: "#" as any,
      width: 100,
      valueGetter: (params: any) => params.node.rowIndex + 1,
      rowDrag: true
    },
    {
      field: 'code',
      filter: true,
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'name',
      filter: true,
      flex: 1.25,
      minWidth: 200,
    },
    {
      field: 'gender',
      filter: true,
      flex: 0.6,
      minWidth: 130,
    },
    {
      field: 'age',
      filter: true,
      flex: 0.5,
      minWidth: 125,
    },
    {
      field: 'examinationType',
      headerName: 'Type',
      filter: true,
      flex: 0.8,
      minWidth: 200,
      cellRenderer: (props:CustomCellRendererProps) => {
        return <ExaminationTypeBadge value={props.value} />;
    }
    },
    {
      field: 'arriveStatus',
      filter: true,
      flex: 0.8,
      minWidth: 150,
      cellRenderer: (props:CustomCellRendererProps) => {
        const value:boolean = props.value as boolean
        const patientCode:string = props.data.code
        return <ArriveStatusButton 
        arrived={value} 
        handleArriveStatus={()=>HandleArriveStatus(patientCode, !value)}
        />;
    }
    },
  ]

  const HandleArriveStatus = (code:string, arriveStatus:boolean)=>{
    const newPatientsList:patientFollowing[] = patients.map((ele:patientFollowing)=>{
      if(ele.code === code)
        ele.arriveStatus = arriveStatus
      return ele
    })
    setPatients(newPatientsList)
  }

  return (
    <DataGrid
      dataSource={patients}
      columns={columns}
      rowDrag={true}
    />
  )
}

export default FollowingUp