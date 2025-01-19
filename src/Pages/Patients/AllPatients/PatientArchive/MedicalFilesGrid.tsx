import React, { useEffect, useState } from 'react'
import DataGrid from '../../../../Components/DataGrid/DataGrid'
import { medicalFile, medicine } from '../../../Examination/New/types';
import { ColDef } from "ag-grid-community";
import { CustomCellRendererProps } from "ag-grid-react";
import GridControls from './GridControls';

const MedicalFilesGrid = ({files, showGallery}:{files:medicalFile[], showGallery:any}) => {
  const [medicalFiles, setMedicalFiles] = useState<medicalFile[]>(files);
  const medicalFileColumns: ColDef[] = [
    {
      field: "#" as any,
      width: 100,
      valueGetter: (params: any) => params.node.rowIndex + 1,
      rowDrag: true,
    },
    {
      field: "name",
      filter: true,
      flex: 1,
      minWidth: 250,
    },
    {
      field: "note",
      filter: true,
      flex: 1,
      minWidth: 200,
    },

    {
      field: "file",
      headerName: "Photo",
      filter: true,
      flex: 0.8,
      minWidth: 120,
    },
    {
      field: "date",
      filter: true,
      flex: 0.8,
      minWidth: 120,
    },
    {
      field: "control",
      flex: 0.8,
      minWidth: 150,
      cellRenderer: (props: CustomCellRendererProps) => {
        const value: boolean = props.value as boolean;
        const patientCode: string = props.data.name;
        return (
          <button className="btn px-2 py-1"
          onClick={showGallery}>
            <i className="fa fa-eye"></i>
          </button>
        );
      },
    },
  ];

  useEffect(()=>{
    
  },[])
  return (
    <div className="d-flex flex-column" style={{ height: "360px" }}>
          <DataGrid
            dataSource={medicalFiles}
            columns={medicalFileColumns}
            pageSize={3}
            filter={false}
            rowDrag={true}
          />
        </div>
  )
}

export default MedicalFilesGrid