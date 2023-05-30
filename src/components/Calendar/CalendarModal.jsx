import { useState } from 'react'
import forward_icon from '/src/asset/arrow_forward_icon.svg'
import backward_icon from '/src/asset/arrow_backward_icon.svg'
import { StyledHeader, StyledBody } from './CalendarStyle'

import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { DATA_LIST } from '../../_msw/fn'
import { makListByBuyList } from '../../pages/ThisWeek'

// day extend
dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

const Calendar = () => {
  const today = dayjs()
  const [viewDate, setViewDate] = useState(dayjs())
  const [selectDate, setSelectDate] = useState(dayjs())

  const calDates = DATA_LIST.map((el) => makListByBuyList(el)).map((el) => ({
    ...el,
    expiredDate: dayjs(today).add(el.remain, 'day').format('YYYY-MM-DD'),
  }))
  const matchedDates = calDates.filter((el) => {
    return el.expiredDate === selectDate.format('YYYY-MM-DD')
  })
  console.log(matchedDates)

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

  const renderProductDetails = () => {
    if (matchedDates.length > 0) {
      const product = matchedDates[0] // 첫 번째 매칭된 상품 정보를 가져옴
      return (
        <div>
          <h4>Selected Product:</h4>
          <p>Category: {product.category}</p>
          <p>Name: {product.name}</p>
        </div>
      )
    } else {
      return null
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
      <div className="w-[102.66px] h-[20.17px] absolute left-[883.65px] top-[310.04px] text-sm font-medium text-left text-[#665a48]">
        <span>
          오늘
          {selectDate && matchedDates.length > 0 && (
            <div>
              <h2>Selected Date: {selectDate.format('YYYY-MM-DD')}</h2>
              {renderProductDetails()}
            </div>
          )}
        </span>
      </div>
    </>
  )
}

export default Calendar
