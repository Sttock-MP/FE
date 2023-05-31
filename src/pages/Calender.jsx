import { useState } from 'react'
import Calenders from '../components/Calendar/CalendarModal'
import FloatingInfo from '../components/Calendar/FloatingInfo'
import infoIcon from '/src/asset/info_i_icon.svg'

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
  const [isInfo, setisInfo] = useState(false)
  const handleToggleInfo = () => setisInfo((prev) => !prev)
  const handleCloseInfo = () => setisInfo(false)

  return (
    <>
      {isInfo && <FloatingInfo onClose={handleCloseInfo} />}
      <div className="mt-[30px] w-[960px] ">
        <div className="flex p-2 gap-[14px]  mb-[5px] items-end">
          <h1 className="font-bold text-[24px]  leading-[35px] text-[#665A48]  ">스똑 캘린더</h1>
          <span className="font-medium text-3 leading-[17px] text-[#665A48]">
            우리집 생활용품 캘린더
          </span>
          <button onClick={handleToggleInfo} className="h-[20px] w-[30px]">
            <img src={infoIcon} className="h-[20px] w-[20px]" />
          </button>
        </div>
        <div className="w-full h-[1px] border-[1px] border-[#E2DED8]" />
      </div>
    </>
  )
}
