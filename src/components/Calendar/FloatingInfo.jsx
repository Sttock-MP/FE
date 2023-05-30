const FloatingInfo = ({ onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div onClick={onClose}>
      <div className="box-border block w-56 h-[88px] top-[100px] left-[320px] relative ">
        <div className="w-[220px] h-[90px]">
          <div className="w-[220px] h-[90px] absolute  left-4 rounded-md bg-white border-[#9f8772] border-[1.5px]  " />
          <span className="absolute left-[27px] top-3 w-[200px] font-['Noto_Sans KR'] text-[7px] leading-[normal] font-bold text-left text-[#9f8772]">
            스똑캘린더?
          </span>
          <p
            className=" absolute top-7 left-[27px] w-[200px] text-[7px]  text-left text-[#9f8772]"
            onClick={handleModalClick}
          >
            오늘 마트에 가세요? 사야할 상품을 체크해보세요! 날짜를 클릭하면 그 날짜기준으로 당일에
            소진될 예정인 상품을 모아 볼 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FloatingInfo
