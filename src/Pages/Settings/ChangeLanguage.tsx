import React, { useEffect, useState } from 'react'



const ChangeLanguage = () => {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const HandleLang = (lang:'en'|'ar')=>{
    setLang(lang)
    document.body.classList.add('rotate');
    setTimeout(
      () => {
        if (lang === 'ar') {
          document.dir = "rtl"
        }
        else if (lang === 'en') {
          document.dir = "ltr"
        }
        document.body.classList.remove('rotate');
      }
      ,
      500
    )
  }
  return (
    <section className="setting-card">
      <div className='d-flex flex-column gap-3' style={{ maxWidth: "250px" }}>

        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="arabic">
              arabic
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="radio" name="lang" id="arabic" onChange={() => HandleLang('ar')} />
              <label htmlFor="arabic"></label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className='form-label' htmlFor="english">
              english
            </label>
          </div>
          <div className="col-6">
            <div className="form-toggle">
              <input type="radio" name="lang" id="english"
                onChange={() => HandleLang('en')} />
              <label htmlFor="english"></label>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-submit"
      >
        Save
      </button>
    </section>
  )
}

export default ChangeLanguage