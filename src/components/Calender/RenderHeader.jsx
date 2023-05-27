import { format } from 'date-fns'

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="header row">
      <div className="col col-start">
        <span className="text font-bold text-lg">
          <span>{format(currentMonth, 'yyyy')}년 </span>
          <span className="text month">{format(currentMonth, 'M')}월</span>
        </span>
      </div>
      <div className="col col-end flex justify-end">
        <button
          onClick={prevMonth}
          className="text-2xl focus:outline-none ml-2 hover:scale-110 cursor-pointer transform"
        >
          <img src="/src/asset/arrow_backward_icon.svg" alt="이전달이동" />
        </button>
        <button
          onClick={nextMonth}
          className="text-2xl focus:outline-none ml-2 hover:scale-110 cursor-pointer transform"
        >
          <img src="/src/asset/arrow_forward_icon.svg" alt="다음달이동" />
        </button>
      </div>
    </div>
  )
}

export default RenderHeader
