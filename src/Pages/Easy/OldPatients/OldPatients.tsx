import { patientEasy, oldPateint } from './types'
import DataGrid from '../../../Components/DataGrid/DataGrid';
import { useCallback, useEffect, useState } from 'react';



const OldPatients = () => {
  const [allPatient, setAllPatient] = useState<patientEasy[]>(oldPateint)
  const [cols, setCols] = useState<any>([ 
    { field: "Counter" as any, flex: 0.75, valueGetter: (params:any) => params.node.rowIndex + 1 },
    { field: "code" as keyof patientEasy, flex: 1 },
    { field: "name" as keyof patientEasy, flex: 1 },
    { field: "gender" as keyof patientEasy, flex: 1 },
    { field: "phone" as keyof patientEasy, flex: 1 },
  ])

  const [columnDefs, setColumnDefs] = useState<any>([
    { field: "Counter" as any, flex: 0.75, valueGetter: (params:any) => params.node.rowIndex + 1 },
    {
      field: "athlete",
      minWidth: 170,
    },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ]);

  const [posts, setPosts] = useState<any>()

   const onGridReady =  useCallback(async (params:any) => {
    await fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  

  useEffect(()=>{
    console.log(posts)
  },[posts])

  return (
    <>
      <DataGrid
        // dataSource={posts}
        // columns={columnDefs}
        dataSource={posts}
        columns={columnDefs}
        onGridReady={onGridReady}
      />
      
    </>
  )
}

export default OldPatients