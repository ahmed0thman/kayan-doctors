import { NavLink } from 'react-router-dom'
import { subNavLink } from './types'

const SubNav = ({subNavLinks}:{subNavLinks:subNavLink[]}) => {
  return (
    <div className="d-flex flex-wrap gap-3 sub-page-nav">
      {subNavLinks.map((ele, i)=>
        <NavLink to={`${ele.target}`}
        className={({ isActive }) => `btn d-flex align-items-center gap-3 ${isActive ? "btn-secondary" : "btn-primary"}`}>
        {ele.icon && <img src={ele.icon} />}
        {ele.title}
      </NavLink>
      )}
    </div>
  )
}

export default SubNav