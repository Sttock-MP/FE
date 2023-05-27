import {
  isSameMonth,
  format,
  isSameDay,
  parse,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns'

const RenderCells = ({ currentMonth, selectedDate, handleDateClick }) => {
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const rows = []
  let days = []
  let day = startDate
  let formattedDate = ''

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd')
      const cloneDay = day
      days.push(
        <div
          className={`col cell flex-1 text-center ${
            !isSameMonth(day, monthStart)
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected bg-blue-500 text-white'
              : format(currentMonth, 'M') === (day, 'M')
              ? 'not-valid text-gray-400'
              : 'valid'
          }`}
          key={day}
          onClick={() => handleDateClick(parse(cloneDay))}
        >
          <div>
            <span
              className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid ' : ''}
            >
              {formattedDate}
            </span>
          </div>
        </div>
      )
      day = addDays(day, 1)
    }
    rows.push(
      <div className="row flex" key={day}>
        {days}
      </div>
    )
    days = []
  }
  return <div className="body">{rows}</div>
}

export default RenderCells
