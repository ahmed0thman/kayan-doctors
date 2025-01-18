import React, { useEffect, useState } from "react";
import DataFilter from "../DataFilter/DataFilter";
import { AgGridReact } from "ag-grid-react";
import {
  themeQuartz,
  AllCommunityModule,
  ModuleRegistry,
} from "ag-grid-community";
import NoData from "../NoData";
import { RowDragModule,provideGlobalGridOptions } from "ag-grid-community";
import { AG_GRID_LOCALE_EG } from "./arEG";
import { useSelector } from "react-redux";
import { language } from "../../Settings/store/features/language/languageSlice";
import { AG_GRID_LOCALE_EN } from "./enUS";

ModuleRegistry.registerModules([AllCommunityModule,RowDragModule]);
const DataGrid = ({
  dataSource,
  columns,
  pageSize = 6,
  colWidth = 150,
  onGridReady,
  onRowDoubleClicked,
  rowDrag=false,
  filter=true
}: {
  dataSource: Array<any>,
  columns: any,
  pageSize?: number,
  colWidth?: number,
  onGridReady?: any,
  onRowDoubleClicked?:any,
  rowDrag?:boolean,
  filter?:boolean
}) => {
  const lan = useSelector(language);

  const [filterText, setFilterText] = useState<string | null>();
  const dataGridTheme = themeQuartz.withParams({
    spacing: 16.5,
  });
  const [cols, setCols] = useState<Array<any>>();
  
  useEffect(()=>{
    if(Array.isArray(columns)){
      setCols(columns)
    }
    else{
      setCols(
        [
          {
            field: "#" as any,
            width: 120,
            valueGetter: (params: any) => params.node.rowIndex + 1,
            rowDrag: rowDrag
          },
          ...Object.keys(columns).map((field) => ({
            field: field,
            filter: true,
            flex: 1,
            minWidth: colWidth,
          })),
        ]
      )
    }
  },[columns])

  useEffect(() => {
    provideGlobalGridOptions({
      localeText: lan === "ar" ? AG_GRID_LOCALE_EG : AG_GRID_LOCALE_EN,
    });
  }, [lan]);
  return dataSource.length > 0 ? (
    <>
      {filter && <DataFilter
        filterText={filterText as string}
        setFilterText={setFilterText}
      />}
      <section className="data-grid">
        <AgGridReact
          quickFilterText={filterText as string}
          rowData={dataSource}
          columnDefs={cols}
          theme={dataGridTheme}
          pagination
          paginationPageSize={pageSize}
          onGridReady={onGridReady}
          paginationPageSizeSelector={[pageSize, 2 * pageSize]}
          onRowClicked={onRowDoubleClicked}
          rowDragManaged={rowDrag}
          enableRtl={lan==='ar'}
          suppressScrollOnNewData={true}
        />
      </section>
    </>
  ) : (
    <NoData />
  );
};

export default DataGrid;
