import React, { useEffect, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enUS } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { format } from 'date-fns';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { TimeView } from '@mui/x-date-pickers';



const Schedules = () => {
  const [scheduleStartTime, setScheduleStartTime] = useState<Date|null>(new Date);
  const [scheduleEndTime, setScheduleEndTime] = useState<Date|null>(new Date);

  const [timeStartView,setTimeStartView] = useState<TimeView>('hours');
  const [timeEndView,setTimeEndView] = useState<TimeView>('hours');
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Add Schedule
      </h4>

      <div className="setting-form">
        <div className="row flex-grow-1">
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='scheduleDay' className="form-label">
                day
              </label>
              <select name="scheduleDay" id="scheduleDay" className="form-select">
                <option value="" selected>
                  Choose the day
                </option>
              </select>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='startTime' className="form-label">
                Start Time
              </label>
              <input type="text" name="startTime" id="startTime" className="form-control" value={format(scheduleStartTime as Date, "hh:mm a")} placeholder='Please select the time'/>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enUS}>
                {timeStartView && <TimeClock 
                  defaultValue={new Date}
                  value={scheduleStartTime} 
                  onChange={(newValue,selection,view) =>{
                    setScheduleStartTime(newValue)
                    if(view=='minutes' && selection=='finish'){
                      setTimeStartView('hours')
                    }
                  }}
                  onViewChange={(TimeView)=> setTimeStartView(TimeView)}
                  ampmInClock 
                  view={timeStartView}
                  />
                }
              </LocalizationProvider>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="form-group">
              <label htmlFor='endTime' className="form-label">
                End Time
              </label>
              <input type="text" name="endTime" id="endTime" className="form-control" value={format(scheduleEndTime as Date, "hh:mm a")}
              placeholder='Please select the time'/>
              <LocalizationProvider 
                dateAdapter={AdapterDateFns} 
                adapterLocale={enUS}>
                <TimeClock
                  value={scheduleEndTime} 
                  onChange={(newValue,selection,view) =>{
                    setScheduleEndTime(newValue)
                    if(view=='minutes' && selection=='finish'){
                      setTimeEndView('hours')
                    }
                  }}
                  onViewChange={(TimeView)=> setTimeEndView(TimeView)}
                  ampmInClock 
                  view = {timeEndView}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-submit">
          Add New
        </button>



      <h4 className="heading mt-5">
        Schedules List
      </h4>

      <table>
        <thead>
          <tr>
            <td>Day</td>
            <td>Start</td>
            <td>End</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>12:00 pm</td>
            <td>6:30 pm</td>
            <td className='actions'>
              <button className="btn text-info">
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger">
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
          <td>Tuesday</td>
            <td>12:00 pm</td>
            <td>6:30 pm</td>
            <td className='actions'>
              <button className="btn text-info">
                <i className="fa fa-pencil fa-lg" aria-hidden="true"></i>
              </button>
              <button className="btn text-danger">
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </section>
  )
}

export default Schedules