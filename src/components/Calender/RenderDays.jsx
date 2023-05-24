const RenderDays = () => {
  const days = []
  const date = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className="col bg-gray text-center border p-2" key={i}>
        {date[i]}
      </div>
    )
  }

  return <div className="days flex row bg-beige ">{days}</div>
}
export default RenderDays
