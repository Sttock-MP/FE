const RenderDays = () => {
  const days = []
  const date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  for (let i = 0; i < 7; i++) {
    days.push(
      <div
        className="col text-gray-400 font-bold text-lg text-center flex-1
      "
        key={i}
      >
        {date[i]}
      </div>
    )
  }

  return <div className="days flex">{days}</div>
}
export default RenderDays
