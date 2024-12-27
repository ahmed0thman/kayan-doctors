import './custom-datepicker.css'
import { endOfMonth, format, getDay, startOfMonth, subMonths } from "date-fns"
import { Months, WeekDays } from './types'








export default class HnDatepicker {
  private datepicker: HTMLDivElement;
  private currentView: HTMLDivElement;
  private weekDays: HTMLDivElement;
  private days: HTMLDivElement;
  private daysContainer: HTMLDivElement;
  private months: HTMLDivElement;
  private dateInput: HTMLInputElement;
  private btnToggle: HTMLButtonElement;
  private btnSetToday: HTMLButtonElement;
  private years: HTMLSelectElement;
  private selectedMonthElement: HTMLSpanElement;
  private btnPrev: HTMLButtonElement;
  private btnNext: HTMLButtonElement;

  private today: Date;
  private todayFormatted: string;
  private arrToday: string[];

  private minDate: string;
  private maxDate: string;
  private minYear: number;
  private maxYear: number;
  private minMonth: number;
  private maxMonth: number;
  private minDay: number;
  private maxDay: number;

  private arrMinDate: string[];
  private arrMaxDate: string[];

  private selectedYear: number;
  private selectedMonth: number;
  private selectedDay: number;
  private selectedDate: Date;
  private selectedDateFormated: string;
  
  private selectedDateChangeEvent: CustomEvent;

  private selectedMonthSpan:HTMLSpanElement | null = null;
  private selectedDaySpan:HTMLSpanElement | null = null;

  constructor(datepicker: HTMLDivElement, minDate?:string, maxDate?:string) {
    this.datepicker = datepicker;
    this.datepicker.innerHTML = HMTLHnDatePicker;
    this.weekDays = datepicker.querySelector<HTMLTableRowElement>(".week-days") as HTMLDivElement;
    this.currentView = datepicker.querySelector<HTMLDivElement>(".current-view") as HTMLDivElement;
    this.days = datepicker.querySelector<HTMLDivElement>(".days") as HTMLDivElement;
    this.daysContainer = datepicker.querySelector<HTMLDivElement>(".days-container") as HTMLDivElement;
    this.months = datepicker.querySelector<HTMLDivElement>(".months") as HTMLDivElement;
    this.dateInput = datepicker.querySelector<HTMLInputElement>(".date-input") as HTMLInputElement;
    this.btnToggle = datepicker.querySelector<HTMLButtonElement>(".open-datepicker") as HTMLButtonElement;
    this.btnSetToday = datepicker.querySelector<HTMLButtonElement>(".select-today") as HTMLButtonElement;
    this.years = datepicker.querySelector<HTMLSelectElement>(".years") as HTMLSelectElement;
    this.selectedMonthElement = datepicker.querySelector<HTMLSpanElement>(".selected-month") as HTMLSpanElement;
    this.btnPrev = datepicker.querySelector<HTMLButtonElement>(".btn-prev") as HTMLButtonElement;
    this.btnNext = datepicker.querySelector<HTMLButtonElement>(".btn-next") as HTMLButtonElement;

    // this.minDate = datepicker.getAttribute("min-date") as string;
    // this.maxDate = datepicker.getAttribute("max-date") as string;
    this.minDate = minDate as string;
    this.maxDate = maxDate as string;
    if (!(new Date(this.minDate).getTime())) {
      this.minDate = "1900-01-01";
    }
    if (!(new Date(this.maxDate).getTime())) {
      this.maxDate = "2099-12-31";
    }
    this.arrMinDate = this.minDate.split("-");
    this. arrMaxDate = this.maxDate.split("-");
    this.minYear = +this.arrMinDate[0];
    this.maxYear = +this.arrMaxDate[0];
    this.minMonth = +this.arrMinDate[1];
    this.maxMonth = +this.arrMaxDate[1];
    this.minDay = +this.arrMinDate[2];
    this.maxDay = +this.arrMaxDate[2];

    

    this.today = new Date();
    this.todayFormatted = format(this.today, 'yyyy-MM-dd');
    this.arrToday = this.todayFormatted.split("-");

    if (this.today > new Date(this.maxDate)) {
      this.selectedDate = new Date(this.maxDate);
      this.selectedDay = this.maxDay;
      this.selectedMonth = this.maxMonth;
      this.selectedYear = this.maxYear;
      this.selectedDateFormated = format(this.selectedDate, 'yyyy-MM-dd');
    }
    else {
      this.selectedDate = this.today;
      this.selectedDay = +this.arrToday[2];
      this.selectedMonth = +this.arrToday[1];
      this.selectedYear = +this.arrToday[0];
      this.selectedDateFormated = this.todayFormatted;
    }
    this.setSelectedDateValue();
    this.setSelectedMonthElement();
    this.HandleShowDialog();
    this.initYears();
    this.initMonths();
    this.initWeekDays()
    this.fillDays()
    if(this.btnNext){
      this.btnNext.addEventListener("click", _e =>{
        this.HandleNextMonth()
      })
    }
  
    if(this.btnPrev){
      this.btnPrev.addEventListener("click", _e =>{
        this.HandlePrevMonth()
      })
    }
  
  
    if (this.btnSetToday) {
      this.btnSetToday.addEventListener("click",_e => {
        this.HandleSetToday();
      })
  
      if(this.selectedMonthElement){
        this.selectedMonthElement.addEventListener("click", _e=> {
          this.HandleShowMonths()
        })
      }
    }
  
    if(this.dateInput){
      this.dateInput.addEventListener("input", _e =>{
        console.log(this.dateInput)
        this.years.value = this.selectedYear.toString()
      })
    }
    this.selectedDateChangeEvent = new CustomEvent('dateChange', {
      detail: { selectedDate: this.getSelectedDate() }
    });
  }
  initWeekDays() {
    this.weekDays.innerHTML = ""
    for(let i =1; i<=7; i++){
      const weekDay = document.createElement("span") as HTMLSpanElement
      weekDay.setAttribute("key", i.toString())
      weekDay.textContent = WeekDays[i]
      this.weekDays.appendChild(weekDay)
    }
  }

  private setSelectedMonthElement() {
    
    this.selectedMonthElement.textContent = Months[this.selectedMonth]
  }
  private formatDate(date: Date) {
    return format(date, 'yyyy-MM-dd')
  }
  
  private setSelectedDateValue() {
    if (this.dateInput) {
      this.dateInput.textContent = this.selectedDateFormated
      this.dateInput.value = this.selectedDateFormated
    }
  }
  
  private HandleShowDialog() {
  
    this.btnToggle?.addEventListener("click", (_e) => {
      this.datepicker.classList.toggle("open")
    })
    this.dateInput?.addEventListener("click", (_e) => {
      this.datepicker.classList.toggle("open")
    })
  }
  
  private initYears() {
    
    if(!this.years){
      return
    }
    this.years.size = 1
  
    for (let num = this.minYear; num <= this.maxYear; num++) {
      const option: HTMLOptionElement = document.createElement('option')
      option.value = `${num}`;
      option.textContent = `${num}`;
      this.years?.appendChild(option)
    }
  
    this.years.value = this.selectedYear.toString();
    this.years.addEventListener("focus", _e => {
      this.years.size = 8
    })
  
    this.years.addEventListener("change",_e=> {
      this.years.size = 1;
      this.years.blur();
      this.selectedYear = +this.years.value
      this.dateChanged()
      this.initMonths()
      this.fillDays()
  
    })
  
    this.years.addEventListener("blur",_e=> {
      this.years.size = 1;
      this.years.blur();
    })
  
  }
  
  private buildDate(): Date {
    let year = this.selectedYear.toString();
    let month = this.selectedMonth.toString();
    let day = this.selectedDay.toString();
    if(this.selectedMonth < 10)
    {
      month = `0${month}`
    }
    if(this.selectedDay < 10)
      {
        day = `0${day}`
      }

    return new Date(`${year}-${month}-${day}`)
  }

  private HandleShowMonths() {
    this.days.style.display = "none";
    this.currentView.style.display = "none";
    this.months.style.display = "grid"
    this.initMonths()
  }

  private fillDays(){
    let dayStart: number = 1;
    let dayEnd: number = 31;
    if (this.selectedYear === this.minYear && this.selectedMonth === this.minMonth) {
      dayStart = this.minDay
    }
    if (this.selectedYear === this.maxYear && this.selectedMonth === this.maxMonth) {
      dayEnd = this.maxDay
    }
    const firstDay = startOfMonth(this.selectedDate);
    const lastDay = endOfMonth(this.selectedDate);
    const lastDayIndex = lastDay.getDate()
    const firstWeekdayIndex = ((getDay(firstDay) + 8) % 7) + 1;
    const lastWeekdayIndex = ((getDay(lastDay) + 8) % 7) + 1;
    this.daysContainer.innerHTML = ""
    if(firstWeekdayIndex > 1){
      const previousMonth = subMonths(this.selectedDate, 1);
      const lastDayPrevMonth =endOfMonth(previousMonth);
      const lastDayPrevMonthIndex = lastDayPrevMonth.getDate()

      for(let i=firstWeekdayIndex-2; i>=0; i--){
        const daySpanElement = document.createElement("button");
        daySpanElement.setAttribute("key", i.toString())
        daySpanElement.className = "day sub"
        daySpanElement.textContent = (lastDayPrevMonthIndex - i).toString()
        this.daysContainer.appendChild(daySpanElement)
      }
    }

    let outRange = false;
    for(let i=1; i<= lastDayIndex; i++){
      const daySpanElement = document.createElement("button");
      
      daySpanElement.setAttribute("key", i.toString())
      daySpanElement.className = "day"
      
      daySpanElement.textContent = (i).toString()
      this.daysContainer.appendChild(daySpanElement)
      if(i === this.selectedDay){
        this.selectedDaySpan = daySpanElement;
        this.selectedDaySpan.classList.add("active")
      }
      if(i > dayEnd || i < dayStart){
        daySpanElement.className = "day sub"
        outRange = true
      }
      if(outRange){
        if(i === lastDayIndex){
          this.selectedDay = dayStart;
          this.selectedDaySpan?.classList.remove("active");
          this.selectedDaySpan = this.daysContainer.children[dayStart +firstWeekdayIndex  - 2] as HTMLSpanElement
          this.selectedDaySpan.classList.add("active")
          this.dateChanged()
        }
      }
      daySpanElement.addEventListener("click", _e =>{
        this.selectedDay = i;
        this.dateChanged()
        this.datepicker.classList.remove("open");
        this.selectedDaySpan?.classList.remove("active");
        this.selectedDaySpan = daySpanElement;
        this.selectedDaySpan.classList.add("active");
      })
    }

    if(lastWeekdayIndex < 7){
      for(let i=1; i<=7-lastWeekdayIndex; i++){
        const daySpanElement = document.createElement("button");
        daySpanElement.setAttribute("key", i.toString())
        daySpanElement.className = "day sub"
        daySpanElement.textContent = (i).toString()
        this.daysContainer.appendChild(daySpanElement)
      }
    }
    
  }
  
  private initMonths() {
  
    let monthStart: number = 1;
    let monthEnd: number = 12;
    if (this.selectedYear === this.minYear) {
      monthStart = this.minMonth
    }
    if (this.selectedYear === this.maxYear) {
      monthEnd = this.maxMonth
    }
    this.months.innerHTML = ""
    for(let i=monthStart; i<= monthEnd; i++){
      const monthCard = document.createElement("button")
      monthCard.setAttribute("key", i.toString())
      monthCard.className = "month-year-card"
      monthCard.textContent = Months[i]
      this.months.appendChild(monthCard)
      if(i === this.selectedMonth){
        this.selectedMonthSpan = monthCard;
        this.selectedMonthSpan.classList.add("active")
      }
      monthCard.addEventListener("click", _e =>{
        this.selectedMonth = i
        this.days.style.display = "revert";
        this.currentView.style.display = "flex";
        this.months.style.display = "none"
        this.dateChanged();
        this.selectedMonthSpan?.classList.remove("active")
        this.selectedMonthSpan = monthCard;
        this.selectedMonthSpan.classList.add("active")
        this.fillDays()
      })
    }
  }
  
  private HandleSetToday() {
    if (this.today > new Date(this.maxDate)) {
      return
    }
    this.selectedDate = this.today;
    this.selectedDay = +this.arrToday[2];
    this.selectedMonth = +this.arrToday[1];
    this.selectedYear = +this.arrToday[0];
    this.dateChanged()
    this.years.value = this.selectedYear.toString();
    this.initMonths()
    this.fillDays()

    this.datepicker.classList.remove("open")
  }
  
  private HandleNextMonth() {
    if (this.selectedYear === this.maxYear) {
      if (this.selectedMonth === this.maxMonth) {
        return
      }
    }
  
    if (this.selectedMonth === 12) {
      this.selectedYear = this.selectedYear + 1
      this.years.value = this.selectedYear.toString()
      this.selectedMonth = 1
    }
    else {
      this.selectedMonth = this.selectedMonth + 1
    }
    this.dateChanged();
    this.fillDays()
  }
  
  private dateChanged() {
    this.selectedDate = this.buildDate();
    this.selectedDateFormated = this.formatDate(this.selectedDate);
    this.setSelectedMonthElement();
    this.setSelectedDateValue();
    this.datepicker.dispatchEvent(this.selectedDateChangeEvent);
  }

  public addEventListener(type: string, listener: EventListener) {
    this.datepicker.addEventListener(type, listener);
  }

  private HandlePrevMonth() {
    if (this.selectedYear === this.minYear) {
      if (this.selectedMonth === this.minMonth) {
        return
      }
    }
  
    if (this.selectedMonth === 1) {
      this.selectedYear = this.selectedYear - 1
      this.years.value = this.selectedYear.toString()
      this.selectedMonth = 12
    }
    else {
      this.selectedMonth = this.selectedMonth - 1
    }
    this.dateChanged()
    this.fillDays()
  }
  
  
  public getSelectedDate(){
    if(this.selectedDate > new Date(this.maxDate)){
      return this.maxDate
    }
    if(this.selectedDate < new Date(this.minDate)){
      return this.minDate
    }

    return this.selectedDateFormated
  }
  
}




const HMTLHnDatePicker = `
<div class="hn-datepicker-input">
  <input class="date-input" type="text" readonly>
  <button class="open-datepicker">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/></svg>
  </button>
</div>
<div class="hn-datepicker-dialog">
  <div class="hn-datepicker-header">
    <div class="current-view">
      <button id="btnPrev" class="btn-prev">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M34.5 239L228.9 44.7c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9L131.5 256l154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0L34.5 273c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
      </button>
      <span class="selected-month">Jan</span>
      
      <button id="btnNext" class="btn-next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.5 273L91.1 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9L188.5 256 34.5 101.3c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0L285.5 239c9.4 9.4 9.4 24.6 0 33.9z"/></svg>
      </button>
      
    </div>
    <select name="years" id="years" class="years" >
    </select>
    <button id="selectToday" class="select-today">Today</button>
  </div>
  <div class="days">
      <div class="week-days">
        <span key="1">Sat</th>
      </div>
      <div class="days-container">
        <span class="day">1</span>

      </div>
  </div>
  <div class="hn-grid months" style="display: none;">
    <span key="1" class="month-year-card">
      January
    </span>
  </div>
</div>
`

