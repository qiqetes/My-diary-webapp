
import React, { Component } from 'react'
import './App.scss'
import Day from './Day'
import DiaryPage from './DiaryPage'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeDay: "",
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      daysInMonth: [],
      weekDays: ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      dayMonth: {},
      selectedDayMonth: {}
    }

    this.changeSelectedDay = this.changeSelectedDay.bind(this);
  }
  componentDidMount() {
    let newDIM = []
    for (let i = 0; i < this.state.months.length; i++) {
      newDIM.push(daysInMonth(i, 2020));
    }
    this.setState({ daysInMonth: newDIM });

    let dayMonth = today();
    this.setState({ dayMonth: dayMonth });
    if (this.state.selectedDayMonth.day === undefined) {
      this.setState({ selectedDayMonth: dayMonth });
    }
  }
  changeSelectedDay(monthN, dayN) {
    console.log("Changing day to: " + dayN + "  and month to: " + monthN);
    let newDayMonth = { day: dayN, month: monthN };
    this.setState({ selectedDayMonth: newDayMonth });
  }

  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-7 col-xl-9 ">
            <DiaryPage month={this.state.months[this.state.selectedDayMonth.month]} dayN={this.state.selectedDayMonth.day} />
          </div>
          <div className="col-sm-12 col-md-5 col-xl-3 ">
            <div className="row justify-content-center ">
              <div className="row calendar">

                {
                  this.state.months.map((m, i) => {
                    return (
                      <MonthColumn nDays={this.state.daysInMonth[i]}
                        month={m}
                        dayMonth={this.state.dayMonth}
                        selectedDayMonth={this.state.selectedDayMonth}
                        monthN={i}
                        key={i}
                        changeSelectedDayFunc={this.changeSelectedDay}
                      />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Return the number of days in a given year and month
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
// Return tuple with the actual month and day number
function today() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  return {
    month: month,
    day: day - 1
  }
}

// Component that shows a column with all the days in a month
function MonthColumn(props) {
  let arr = []
  // First element of the column will be the first letter of the month
  arr.push(
    <div className="row justify-content-center cal-row" key={props.month + -1}>{props.month[0]}</div>
  );
  // For each day in the month we will create a Day component
  for (let i = 0; i < props.nDays; i++) {
    arr.push(
      <div className="row justify-content-center cal-row" key={props.month + i}>
        <Day
          isToday={props.monthN === props.dayMonth.month && i === props.dayMonth.day}
          isSelected={props.selectedDayMonth.day === i && props.selectedDayMonth.month === props.monthN}
          onClickHandler={() => { props.changeSelectedDayFunc(props.monthN, i) }}
        />
      </div>
    );
  }
  return (
    <div className="col-1 month-col">
      {arr}
    </div>
  )
}


