import { useState } from 'react'
import forward_icon from '/src/asset/arrow_forward_icon.svg'
import backward_icon from '/src/asset/arrow_backward_icon.svg'
import { StyledHeader, StyledBody } from './CalendarStyle'

import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
// day extend
dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

const Calendar = () => {
  const today = dayjs()
  const [viewDate, setViewDate] = useState(dayjs())
  const [selectDate, setSelectDate] = useState(dayjs())

  const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week()
    const endWeek = viewDate.endOf('month').week() === 1 ? 53 : viewDate.endOf('month').week()
    let calender = []

    for (let week = startWeek; week <= endWeek; week++) {
      calender.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = viewDate
                .startOf('week')
                .week(week)
                .add(n + i, 'day')
              if (viewDate.format('MM') === '12') {
                current = viewDate
                  .startOf('week')
                  .week(week - 52)
                  .add(n + i, 'day')
              }
              // 현재 날짜 (기준)
              let isSelected =
                selectDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : ''
              let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'today' : ''
              let isNone = current.format('MM') === viewDate.format('MM') ? '' : 'none'
              return (
                <>
                  <div className={`box`} key={`${week}_${i}`}>
                    <div
                      className={`text ${isSelected} ${isToday} ${isNone}`}
                      onClick={() => {
                        setSelectDate(current)
                      }}
                    >
                      <span className={`day`}>{current.format('D')}</span>
                      {isToday ? (
                        <span className="isToday">오늘</span>
                      ) : isSelected ? (
                        <span className="isSelected"></span>
                      ) : null}
                    </div>
                  </div>
                </>
              )
            })}
        </div>
      )
    }
    return calender
  }

  const changegeMonth = (date, changeString) => {
    switch (changeString) {
      case 'add':
        return setViewDate(viewDate.add(1, 'month'))
      case 'subtract':
        return setViewDate(viewDate.subtract(1, 'month'))
      default:
        return date
    }
  }

  return (
    <>
      <StyledHeader>
        <button>
          <img src={backward_icon} onClick={() => changegeMonth(viewDate, 'subtract')}></img>
        </button>
        <span className="thisMonth">{viewDate.format('MM')}월</span>
        <button>
          <img
            src={forward_icon}
            className="forward_icon"
            onClick={() => changegeMonth(viewDate, 'add')}
          ></img>
        </button>
      </StyledHeader>
      <StyledBody>
        <div className="row week">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        <div>{createCalendar()}</div>
      </StyledBody>
    </>
  )
}

export default Calendar
