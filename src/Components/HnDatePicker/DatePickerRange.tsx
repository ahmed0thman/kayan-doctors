import React, { useEffect, useRef, useState } from 'react'
import HnDatepicker from './HnDatepicker';

const DatePickerRange = ({onChange, minDate, maxDate}:{
  onChange: any,
  minDate?: string,
  maxDate?:string
}) => {
  const hnDateRef = useRef<HTMLDivElement|null>(null);
  let hnDatePicker:HnDatepicker
  useEffect(()=>{
    if(hnDateRef.current){
      hnDatePicker = new HnDatepicker(hnDateRef.current, minDate, maxDate)
      if(hnDatePicker){
        hnDatePicker.addEventListener("dateChange", (e:any) =>{
          onChange(new Date(hnDatePicker.getSelectedDate()))
        })
      }
    }
  },[hnDateRef.current])
  return (
    <div className="hn-datepicker" ref={hnDateRef}></div>
  )
}

export default DatePickerRange