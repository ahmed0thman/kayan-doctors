import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { APP_DISPATCH } from '../../Settings/store/store';
import {language, setLanguage} from '../../Settings/store/features/language/languageSlice';
import { useNavigate } from 'react-router-dom';



const ChangeLanguage = () => {
  const dispatch = useDispatch<APP_DISPATCH>()
  const languageState = useSelector(language)
  const [lang, setLang] = useState(languageState);
  const navigate = useNavigate()

  const HandleLang = (lang:'en'|'ar')=>{
    dispatch(setLanguage(lang))
    setLang(lang)
    navigate(0);
  }

  // useEffect(()=>{
    
  // },[languageState])
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
              <input type="radio" name="lang" id="arabic" onChange={() => HandleLang('ar')}  checked={lang==='ar'}/>
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
                onChange={() => HandleLang('en')} checked={lang==='en'}/>
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