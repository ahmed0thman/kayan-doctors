import React from 'react'
import { Link } from 'react-router-dom'
import chartIcon from './imgs/chart.svg'
import barChartIcon from './imgs/bar-chart.svg'
import pieChartIcon from './imgs/pie-chart.svg'
import { useDispatch } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { setActivePage } from '../../Settings/store/features/activePage/activePageSlice'

const AccountReports = () => {
  const dispatch = useDispatch<APP_DISPATCH>()
  dispatch(setActivePage('Account Reports'))
  return (
    <div className="examination">
      <Link className="btn btn-secondary" to={'/account-reports/patients'}>
        {/* <i className="fa fa-slack" aria-hidden="true"></i> */}
        <img src={chartIcon} alt="" />
        <p>
          Patient Chart
        </p>
      </Link>
      <Link className="btn btn-primary" to={'/account-reports/bar-chart'}>
        {/* <i className="fa fa-exclamation-circle" aria-hidden="true"></i> */}
        <img src={barChartIcon} alt="" />
        <p>
          Bar chart
        </p>
      </Link>
      <Link className="btn btn-dark-green" to={'/account-reports/pie-chart'}>
        {/* <i className="fa fa-exclamation-circle" aria-hidden="true"></i> */}
        <img src={pieChartIcon} alt="" />
        <p>
          Pie Chart
        </p>
      </Link>
    </div>
  )
}

export default AccountReports
