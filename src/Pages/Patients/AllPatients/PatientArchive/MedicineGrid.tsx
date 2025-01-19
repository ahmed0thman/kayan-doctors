import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../Components/DataGrid/DataGrid'
import { medicine } from '../../../Examination/New/types';
import { ColDef } from "ag-grid-community";
import { CustomCellRendererProps } from "ag-grid-react";
import GridControls from './GridControls';

const MedicineGrid = () => {
  const [medicineList, setMedicineList] = useState<medicine[]>([
    {
      name: "Paracetamol",
      dose: "500mg",
      time: "Every 8 hours",
      note: "For fever reduction",
    },
    {
      name: "Ibuprofen",
      dose: "400mg",
      time: "Every 12 hours",
      note: "For pain relief",
    },
    {
      name: "Amoxicillin",
      dose: "500mg",
      time: "Every 8 hours",
      note: "For bacterial infections",
    },
    {
      name: "Metformin",
      dose: "500mg",
      time: "Twice a day",
      note: "For diabetes management",
    },
    {
      name: "Lisinopril",
      dose: "10mg",
      time: "Once a day",
      note: "For blood pressure control",
    },
    {
      name: "Simvastatin",
      dose: "20mg",
      time: "Once a day",
      note: "For cholesterol management",
    },
    {
      name: "Omeprazole",
      dose: "20mg",
      time: "Once a day",
      note: "For acid reflux treatment",
    },
    {
      name: "Aspirin",
      dose: "81mg",
      time: "Once a day",
      note: "For blood thinning",
    },
  ]);
  const medicineColumns: ColDef[] = [
    {
      field: "#" as any,
      width: 100,
      valueGetter: (params: any) => params.node.rowIndex + 1,
      rowDrag: true,
    },
    {
      field: "name",
      headerName: "Medicine Name",
      filter: true,
      flex: 1,
      minWidth: 250,
    },
    {
      field: "dose",
      filter: true,
      flex: 1,
      minWidth: 200,
    },

    {
      field: "time",
      filter: true,
      flex: 0.8,
      minWidth: 120,
    },
    // {
    //   field: "control",
    //   flex: 0.8,
    //   minWidth: 150,
    //   cellRenderer: (props: CustomCellRendererProps) => {
    //     const value: boolean = props.value as boolean;
    //     const patientCode: string = props.data.name;
    //     return (
    //       <GridControls/>
    //     );
    //   },
    // },
  ];

  useEffect(()=>{
    
  },[])
  return (
    <div className="d-flex flex-column" style={{ height: "360px" }}>
          <DataGrid
            dataSource={medicineList}
            columns={medicineColumns}
            pageSize={3}
            filter={false}
            rowDrag={true}
          />
        </div>
  )
}

export default MedicineGrid