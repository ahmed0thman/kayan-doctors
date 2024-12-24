import React from 'react'
import { Link } from 'react-router-dom'

const SettingsNav = ({active}:{
  active:"basic" | "prescription"
}) => {
  return (
    <div className="d-flex gap-3 sub-page-nav">
        <Link to={"/settings"}>
          <button className={`btn ${active==='basic'? "btn-secondary": "btn-primary"}`}>
            Settings
          </button>
        </Link>
        <Link to={"/settings/prescriptions"}>
          <button className={`btn ${active==='prescription'? "btn-secondary": "btn-primary"}`}>
            Prescription Settings
          </button>
        </Link>
      </div>
  )
}

export default SettingsNav