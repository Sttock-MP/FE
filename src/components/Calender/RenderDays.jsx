const RenderDays = () => {
  const days = []
  const date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  for (let i = 0; i < 7; i++) {
    days.push(
      <div
        className="col text-center text-gray-400 font-bold text-lg  grid grid-cols-[60px] grid-rows-[50px] rounded-lg
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
