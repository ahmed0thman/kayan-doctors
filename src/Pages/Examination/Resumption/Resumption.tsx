import React from 'react'
import DataGrid from '../../../Components/DataGrid/DataGrid'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../../Settings/store/store'
import { setActivePage } from '../../../Settings/store/features/activePage/activePageSlice'

const Resumption = () => {

  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Today Resumption Examination'))
  return (
    <DataGrid
      dataSource={[]}
      columns={[]}
    />
  )
}

export default Resumption