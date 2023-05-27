import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function PurchaseDatePicker({ text = '구매일자 선택', startDate, setStartDate, disabled = false }) {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate && setStartDate(date)}
      dateFormat="yyyy-MM-dd"
      placeholderText={text}
      className="w-[100%] h-[100%]  pl-2 text-sm font-medium text-left"
      disabled={disabled}
    />
  )
}

export default PurchaseDatePicker
