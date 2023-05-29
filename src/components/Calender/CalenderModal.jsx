import { useState } from 'react'
import { addMonths, subMonths } from 'date-fns'
import RenderHeader from './RenderHeader'
import RenderDays from './RenderDays'
import RenderCells from './RenderCells'

export const CalenderModal = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const handleDateClick = (day) => {
    console.log(day)
    setSelectedDate(parse(day, 'yyyy-MM-dd', new Date()))
  }

  return (
    <>
      <div className=" calender rounded-lg  border-gray-300 bg-white shadow-md p-4 mx-auto my-10 ">
        <RenderHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />

        <RenderDays />

        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleDateClick={handleDateClick}
        />
      </div>
    </>
  )
}
