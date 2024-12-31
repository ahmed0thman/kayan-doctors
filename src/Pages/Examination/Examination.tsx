import React from 'react'
import { Link } from 'react-router-dom'
import newIcon from './imgs/new.svg'
import resumptionIcon from './imgs/resumption.svg'
import waitingIcon from './imgs/waiting.svg'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setActivePage } from '../../Settings/store/features/activePage/activePageSlice'

const Examination = () => {
  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Examination'))
  return (
    <div className="examination">
      <Link className="btn btn-secondary" to={'/examination/new'}>
        {/* <i className="fa fa-slack" aria-hidden="true"></i> */}
        <img src={newIcon} alt="" />
        <p>
          New
        </p>
      </Link>
      <Link className="btn btn-primary" to={'/examination/resumption'}>
        {/* <i className="fa fa-exclamation-circle" aria-hidden="true"></i> */}
        <img src={resumptionIcon} alt="" />
        <p>
          Resumption
        </p>
      </Link>
      <Link className="btn btn-dark-green" to={'/examination/waiting'}>
        {/* <i className="fa fa-exclamation-circle" aria-hidden="true"></i> */}
        <img src={waitingIcon} alt="" />
        <p>
          Waiting
        </p>
      </Link>
    </div>
  )
}

export default Examination