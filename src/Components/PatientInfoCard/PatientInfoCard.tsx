import React from 'react'
import infoIcon from '../../assets/images/icons/patient-info/name.svg'
import genderICon from '../../assets/images/icons/patient-info/gender.svg'
import phoneIcon from '../../assets/images/icons/patient-info/phone.svg'
import ageIcon from '../../assets/images/icons/patient-info/age.svg'
import addressIcon from '../../assets/images/icons/patient-info/address.svg'
import avatarBg from '../../assets/images/icons/patient-info/person-bg.svg'
import maleIcon from '../../assets/images/icons/patient-info/male-icon.png'
import femaleIcon from '../../assets/images/icons/patient-info/female-icon.png'
import calenderIcon from '../../assets/images/icons/patient-info/calender.svg'

const PatientInfoCard = ({patientInfo}:{
  patientInfo:any
}) => {
  return (
    <section className="patient-info">

        <div className="patient-avatar">
          <img className='avatar-bg' src={avatarBg} alt="" />
          <img className='avatar' src={patientInfo?.gender === 'Male'?maleIcon:femaleIcon} alt="" />
          <div className="last-examination-date">
            
            <p className="heading justify-content-center">
              <img className='mx-1' src={calenderIcon} alt="" />
              last examination date
            </p>
            <span className='value'>
              2024-02-28
            </span>
          </div>
          <div className="card-name">
            {patientInfo?.name}
          </div>
        </div>
        <div className="card-info">
          <div className="info-item">
            <img src={infoIcon} alt="" />
            <span className='label'>
              name :
            </span>
            <span className='value'>
              {patientInfo?.name}
            </span>
          </div>
          <div className="info-item">
            <img src={infoIcon} alt="" />
            <span className='label'>
              Code :
            </span>
            <span className='value'>
              {patientInfo?.code}
            </span>
          </div>
          <div className="info-item">
            <img src={genderICon} alt="" />
            <span className='label'>
              gender :
            </span>
            <span className='value'>
              {patientInfo?.gender}
            </span>
          </div>
          <div className="info-item">
            <img src={phoneIcon} alt="" />
            <span className='label'>
              phone :
            </span>
            <span className='value'>
              {patientInfo?.phone}
            </span>
          </div>
          <div className="info-item">
            <img src={ageIcon} alt="" />
            <span className='label'>
              age :
            </span>
            <span className='value'>
              28
            </span>
          </div>
          <div className="info-item">
            <img src={addressIcon} alt="" />
            <span className='label'>
              address :
            </span>
            <span className='value'>
              Mansoura Qesm 2nd st. 10
            </span>
          </div>
        </div>
      </section>
  )
}

export default PatientInfoCard