import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function PurchaseDatePicker() {
  const [startDate, setStartDate] = useState(null)

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="yyyy-MM-dd"
      placeholderText="구매일자 선택"
      className="w-[100%] h-[100%]  pl-2 text-sm font-medium text-left"
    />
  )
}

export default PurchaseDatePicker
