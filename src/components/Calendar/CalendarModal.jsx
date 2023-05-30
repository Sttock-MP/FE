import { useState } from 'react'
import forward_icon from '/src/asset/arrow_forward_icon.svg'
import backward_icon from '/src/asset/arrow_backward_icon.svg'
import {
  StyledHeader,
  StyledBody,
  StyledFeed,
  StyledWrapper,
  StyledContainer,
} from './CalendarStyle'

import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { DATA_LIST } from '../../_msw/fn'
import { Icon, Detail, SWITCH_ICON, makListByBuyList } from '../../pages/ThisWeek'
import ProductModal from '../Modal/productModal'
import useModal from '../../hooks/useModal'

// day extend
dayjs.extend(weekday)
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

const Calendar = () => {
  const today = dayjs()
  const [viewDate, setViewDate] = useState(dayjs())
  const [selectDate, setSelectDate] = useState(dayjs())

  const { open: openItemModal } = useModal('productModal')
  const handleClick = () => {
    openItemModal(<ProductModal />)
  }
  const calDates = DATA_LIST.map((el) => makListByBuyList(el)).map((el) => ({
    ...el,
    expiredDate: dayjs(today).add(el.remain, 'day').format('YYYY-MM-DD'),
  }))
  const matchedDates = calDates.filter((el) => {
    return el.expiredDate === selectDate.format('YYYY-MM-DD')
  })

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
                        <span className="isToday"></span>
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
      return (
        <div className="ml-3 m-9">
          {matchedDates.map((product) => (
            <div
              key={product.id}
              className="flex h-[100px] w-[380px] p-8 mb-6 items-center border border-gray shadow-sm rounded-md"
            >
              <Icon SVG={SWITCH_ICON[product.category]} />
              <div className="flex flex-col">
                <h2 className="mb-1 pl-7">{product.name}</h2>
                <h3 className="mb-1 pl-7">{product.remain} ml / 개 남음</h3>
              </div>
              <div className="pl-12">
                <Detail onClick={handleClick} />
              </div>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div className="ml-3 m-9">
          <div className="flex h-[100px] w-[380px] p-8 mb-6 items-center border border-gray shadow-sm rounded-md">
            <div className="flex flex-col">
              <h2 className="mb-1 pl-7">소진 예정인 상품이 없습니다.</h2>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <StyledContainer>
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
        <StyledWrapper>
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

          <StyledFeed>
            <span className="m-3 text-sm font-medium text-left text-[#665a48]">오늘 소진</span>
            <div className=" m-3 w-[380px] h-[1px] border-[1px] border-[#E2DED8]" />
            <span>
              {selectDate && matchedDates.length > 0 && <div>{renderProductDetails()}</div>}
            </span>
          </StyledFeed>
        </StyledWrapper>
      </StyledContainer>
    </>
  )
}

export default Calendar
