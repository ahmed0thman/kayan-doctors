import React from 'react'
import searchIcon from '../../../assets/images/icons/search.svg'
import calenderIcon from '../../../assets/images/icons/calender.svg'
import filtersIcon from '../../../assets/images/icons/filters.svg'

const OldPatients = () => {
  return (
    <section className="grid-filter">
        <div className="input-icon">
          <img src={searchIcon} alt="" />
          <input type="search" name="search" id="search" placeholder='search'/>
        </div>
        <button className="btn btn-outline-secondary btn-filter">
          <img src={calenderIcon} alt="" />
          select date
        </button>
        <button className="btn btn-outline-secondary btn-filter">
          <img src={filtersIcon} alt="" />
          filters
        </button>
        <button className="btn btn-filter btn-primary ">
          see all
        </button>
    </section>
  )
}

export default OldPatients