import Calenders from '../components/Calendar/CalendarModal'

export default function Calender() {
  return (
    <>
      <div className="min-w-[1440px] px-[20%]">
        <Title />
        <Calenders />
      </div>
    </>
  )
}

const Title = () => {
  return (
    <div className="mt-[50px] w-[960px]">
      <div className="flex gap-[14px]  mb-[10px] items-end">
        <h1 className="font-bold text-[24px] week_title leading-[35px] text-[#665A48]">
          스똑 캘린더
        </h1>
        <span className="font-medium text-3 leading-[17px] text-[#665A48]">
          우리집 생활용품 캘린더
        </span>
      </div>
      <div className="w-full h-[1px] border-[1px] border-[#E2DED8]" />
    </div>
  )
}
