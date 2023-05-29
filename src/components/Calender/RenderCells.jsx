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
          className={`col cell grid grid-cols-[50px] grid-rows-[50px] text-center p-1 rounded-lg ${
            !isSameMonth(day, monthStart)
              ? 'disabled text-gray'
              : isSameDay(day, selectedDate)
              ? 'selected bg-blue-500 text-white'
              : format(currentMonth, 'M') === (day, 'M')
              ? 'not-valid text-gray'
              : 'valid text-gray-700 hover:bg-gray-100'
          }`}
          key={day}
          onClick={() => handleDateClick(parse(day, 'yyyy-MM-dd', new Date()))}
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
      <div className="row flex " key={day}>
        {days}
      </div>
    )
    days = []
  }
  return <div className="body">{rows}</div>
}

export default RenderCells
