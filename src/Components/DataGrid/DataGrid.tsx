import React, { useState } from 'react'
import DataFilter from '../DataFilter/DataFilter'
import { AgGridReact } from 'ag-grid-react'
import { themeQuartz, ColDef, AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);
const DataGrid = ({dataSource,columns, onGridReady}:{
  dataSource:any,
  columns: any,
  onGridReady:any
}) => {
  const [filterText, setFilterText] = useState<string|null>()
  const dataGridTheme = themeQuartz.withParams({
    spacing: 18.5,
  });
  return (
    <>
      <DataFilter 
        filterText={filterText as string}
        setFilterText={setFilterText}
      />
      <section className='data-grid'>
        <AgGridReact
          quickFilterText={filterText as string}
          rowData={dataSource}
          columnDefs={columns}
          theme={dataGridTheme}
          pagination
          paginationPageSize={6}
          onGridReady={onGridReady}
          // paginationPageSizeSelector = {[6,10]}
        />
      </section>
    </>
  )
}

export default DataGrid