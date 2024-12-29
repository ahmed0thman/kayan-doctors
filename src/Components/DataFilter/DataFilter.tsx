import searchIcon from '../../assets/images/icons/search.svg'
import calenderIcon from '../../assets/images/icons/calender.svg'
import filtersIcon from '../../assets/images/icons/filters.svg'
import React, { useEffect, useRef, useState } from 'react'
import DatePickerRange from '../HnDatePicker/DatePickerRange'


const DataFilter = ({ filterText, setFilterText }:
  {
    filterText: string | null,
    setFilterText: any
  }) => {
  return (
    <section className="grid-filter">
      
      <div className="input-icon">
        <img src={searchIcon} alt="" />
        <input type="search" name="search" id="search" placeholder='search'
          onChange={(e) => setFilterText(e.currentTarget.value)}
          value={filterText as string}
        />
      </div>
      <button className="btn btn-outline-secondary btn-filter">
        <img src={calenderIcon} alt="" />
        
        select date
      </button>
      {/* <DatePickerRange
        onChange={setDate}
      /> */}
      <button className="btn btn-outline-secondary btn-filter">
        <img src={filtersIcon} alt="" />
        filters
      </button>
      <button className="btn btn-filter btn-primary "
        onClick={() => setFilterText('')}
      >
        see all
      </button>
    </section>
  )
}

export default DataFilter