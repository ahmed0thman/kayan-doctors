import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bell from "../../assets/images/icons/bell.svg"
import mail from "../../assets/images/icons/envelope.svg"
import person from "../../assets/images/gallery/profile.png"

const Header = () => {
  const [showOptions, setShowOPtions] = useState<boolean>(false);

  function HandleShowOptions(){
    setShowOPtions(!showOptions)
  }
  return (
    <div className="header">
      <div className="bread-crumb">
        <h2 className="title">
          Welcome Dr Mohamed
        </h2>
      </div>
      <div className="account-pref">
        <div className="d-flex align-items-center gap-4 px-3">
          <Link
            to={'/'}
          >
            <span className='btn-pref'>
              <img src={bell}alt="" />
              <span className="count">
                5
              </span>
            </span>
          </Link>
          <Link
            to={'/'}
          >
            <span className='btn-pref'>
              <img src={mail}alt="" />
              <span className="count">
                3
              </span>
            </span>
          </Link>
        </div>
        <div className="account-user-info">
          <img src={person} alt="" className="profile-img" />
          <p className="user-name">
            Dr.Mohamed Amer
          </p>
          <div className="user-options">
            <i onClick={HandleShowOptions}
            className="fa fa-sort-down fa-lg" aria-hidden="true"></i>

            <ul className={`options-list ${showOptions && "show"}`}>
              <li className="option">
                <Link to={'/settings'}>
                  Settings
                </Link>
              </li>
              <li className="option">
                <Link to={'/settings/change-password'}>
                  Change Password
                </Link>
              </li>
              <li className="option">
                <Link to={'/settings/change-language'}>
                  Change Language
                </Link>
              </li>
              <li className="option">
                <Link to={'/login'}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header