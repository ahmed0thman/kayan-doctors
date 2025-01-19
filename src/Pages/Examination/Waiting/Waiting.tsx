import React from 'react'
import DataGrid from '../../../Components/DataGrid/DataGrid'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../../Settings/store/store'
import { setActivePage } from '../../../Settings/store/features/activePage/activePageSlice'
import DrEasy from '../../DrEasy/DrEasy'

const Waiting = () => {

  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Today Waiting Examination'))
  return (
    <DrEasy/>
  )
}

export default Waiting