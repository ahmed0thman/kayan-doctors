import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { patientEasy } from '../../Easy/OldPatients/types';
import PatientInfoCard from '../../../Components/PatientInfoCard/PatientInfoCard';

const NewDetails = () => {
  const location = useLocation();
  const [patientInfo, setPatientInfo] = useState<patientEasy>()
  const patientData = location.state;

  useEffect(()=>{
    if(patientData){
      setPatientInfo(patientData as patientEasy)
    }
  },[])

  useEffect(()=>{
    console.log(patientInfo)
  },[patientInfo])
  
  return (
    <>
    <PatientInfoCard
      patientInfo={patientInfo}
    />
    </>
  )
}

export default NewDetails