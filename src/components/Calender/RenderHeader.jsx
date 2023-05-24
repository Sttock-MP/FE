import { format } from 'date-fns'

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="header row">
      <div className="col col-start">
        <span className="text">
          <span className="text month">{format(currentMonth, 'M')}월</span>
          <span>{format(currentMonth, 'yyyy')}</span>
        </span>
      </div>
      <div className="col col-end">
        <img src="/src/asset/arrow_backward_icon.svg" alt="이전달이동" onClick={prevMonth} />
        <img src="/src/asset/arrow_forward_icon.svg" alt="다음달이동" onClick={nextMonth} />
      </div>
    </div>
  )
}

export default RenderHeader
