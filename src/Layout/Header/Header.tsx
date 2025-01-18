import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bell from "../../assets/images/icons/bell.svg"
import mail from "../../assets/images/icons/envelope.svg"
import person from "../../assets/images/gallery/profile.png"
import { useDispatch, useSelector } from 'react-redux'
import { APP_DISPATCH } from '../../Settings/store/store'
import { loggedUserState, setLoggedUser } from '../../Settings/store/features/authentication/userSlice'
import { userRole } from '../../Settings/store/features/authentication/types'
import { activePage } from '../../Settings/store/features/activePage/activePageSlice'
import { strings } from '../../Settings/localization/strings'
import { setAuthedState } from '../../Settings/store/features/authentication/authedSlice'

const Header = () => {
  const [showOptions, setShowOPtions] = useState<boolean>(false);
  const dispatch = useDispatch<APP_DISPATCH>()

  const currentActivePage = useSelector(activePage)
  const {user} = useSelector(loggedUserState);
  const userPrefix = user.role === userRole.DOCTOR?'Dr': '';


  const HandleLogout = ()=>{
    localStorage.removeItem('activeUser')
    dispatch(setAuthedState(false))
  }
  function HandleShowOptions(){
    setShowOPtions(!showOptions)
  }
  return (
    <div className="header">
      <div className="bread-crumb">
        <h2 className="title">
          {
            currentActivePage===strings.home
            ? `${strings.welcome} ${userPrefix} ${user.ProfileName}`
            : currentActivePage
          }
        </h2>
      </div>
      <div className="account-pref">
        <div className="header-buttons">
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
            to={'/Messages'}
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
          <img src={person} alt="" className="profile-img" onClick={HandleShowOptions}/>
          <p className="user-name">
          {userPrefix} {user.ProfileName}
          </p>
          <div className="user-options">
            <i onClick={HandleShowOptions}
            className="fa fa-sort-down fa-lg" aria-hidden="true"></i>

            <ul className={`options-list ${showOptions && "show"}`}>
              <li className="option">
                <Link to={`${process.env.REACT_APP_URL_Publish}settings`}>
                  {strings.settings}
                </Link>
              </li>
              <li className="option">
                <Link to={`${process.env.REACT_APP_URL_Publish}settings/change-password`}>
                  {strings.changePassword}
                </Link>
              </li>
              <li className="option">
                <Link to={`${process.env.REACT_APP_URL_Publish}settings/change-language`}>
                {strings.changelanguage}
                </Link>
              </li>
              <li className="option">
                <span onClick={HandleLogout}>
                {strings.logout}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header