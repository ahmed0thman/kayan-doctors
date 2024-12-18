import React from 'react'

const ExtraSettings = () => {
  return (
    <section className='setting-card'>
      <h4 className="heading">
        Who Can See The Patient Diagnosis:
      </h4>

      <div className="d-flex gap-5 mb-5">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="patientDiagnoses" id="forPatientOnly" />
          <label className="form-check-label" htmlFor="forPatientOnly">
            Available For The Patient Only
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="patientDiagnoses"
            id="forDoctorOnly"
          />
          <label className="form-check-label" htmlFor="forDoctorOnly">
            Available For The Doctors Only
          </label>
        </div>

      </div>

      <div className='d-flex flex-column gap-3' style={{ maxWidth: "750px" }}>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="doctorAcceptOnlineCheckups">
              Can The Doctor Accept To Do Online Check Ups:
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="checkbox" name="doctorAcceptOnlineCheckups" id="doctorAcceptOnlineCheckups" />
              <label htmlFor="doctorAcceptOnlineCheckups"></label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="doctorAcceptOnlineChats">
              Can The Doctor Accept To Do Online Chat:
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="checkbox" name="doctorAcceptOnlineChats" id="doctorAcceptOnlineChats" />
              <label htmlFor="doctorAcceptOnlineChats"></label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="assistantSeeDashboard">
              Can The Assistant See All The Dashboard:
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="checkbox" name="assistantSeeDashboard" id="assistantSeeDashboard" />
              <label htmlFor="assistantSeeDashboard"></label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="patientViewDiagnoses">
              Can The patient can view the diagnosis.
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="checkbox" name="patientViewDiagnoses" id="patientViewDiagnoses"/>
              <label htmlFor="patientViewDiagnoses"></label>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ExtraSettings