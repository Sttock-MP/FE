import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBarLogoImage from '/src/asset/sttock_logo_icon.svg'
import MyPageIcon from '/src/asset/my_page_icon.svg'
import AddItemIcon from '/src/asset/add_item_icon.svg'
import ItemModal from '/src/components/Modal/ItemModal'
import classNames from 'classnames'

const NavBar = () => {
  // const [menuToggle, setMenuToggle] = useState(false) 반응형 버튼 나중에...
  const [isOpen, setisOpen] = useState(false)
  const handleClick = () => {
    setisOpen(true)
    // 모달창 열기
  }

  return (
    <nav className="w-[1440px] h-20 relative">
      <div className="w-[1440px] h-20 absolute left-[-1px] top-[-1px] bg-white border border-[#e2ded8]">
        <div className="h-[42px] absolute left-[243px] top-7">
          <Link to="/">
            <img src={NavBarLogoImage} alt="로고" />
          </Link>
        </div>
        <p className="justify-between hidden md:flex  text-[#665a48] items-center font-['Noto_Sans KR'] leading-[normal] font-medium text-left text-sm">
          <Link
            to="/thisweek"
            className="whitespace-pre-wrap absolute top-[49px] left-[489px] hover:text-[#9F8772] hover:font-bold"
          >
            이번 주 구매
          </Link>

          <Link
            to="/calender"
            className="whitespace-pre-wrap absolute top-[49px] left-[610px] hover:text-[#9F8772] hover:font-bold "
          >
            스똑캘린더
          </Link>

          <Link
            to="/items"
            className="whitespace-pre-wrap absolute top-[49px] left-[728px] hover:text-[#9F8772] hover:font-bold "
          >
            항목 별 보기
          </Link>
        </p>
        <div>
          <button
            onClick={handleClick}
            className="absolute w-[23px] h-[23]px  left-[1138px] top-[49px]"
          >
            {/*클릭시 제품 추가 모달창 생성*/}
            <ItemModal isOpen={isOpen} />
            <img src={AddItemIcon} />
          </button>
        </div>
        <Link to="mypage" className="absolute w-[23px] h-[23]px  left-[1175px] top-[49px]">
          <img src={MyPageIcon} />
        </Link>
      </div>
    </nav>
  )
}

{
  /* 반응형 - 모바일 메뉴
  /* <div className="md:hidden flex items-center ">
 <button onClick={() => setMenuToggle(!menuToggle)}>
   {menuToggle ? ( //햄버거 토글 메뉴
     <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 6h16M4 12h16M4 18h16"
       />
     </svg>
   ) : (
     //X메뉴
     <svg
       xmlns="http://www.w3.org/2000/svg"
       className="h-6 w-6"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 6h16M4 12h16M4 18h16"
       />
     </svg>
   )}
 </button>
</div>
<div className={classNames('md:hidden', { hidden: !menuToggle })}> */
}

export default NavBar
