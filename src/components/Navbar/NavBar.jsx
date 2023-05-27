import { Link } from 'react-router-dom'
import NavBarLogoImage from '/src/asset/sttock_logo_icon.svg'
import MyPageIcon from '/src/asset/my_page_icon.svg'
import AddItemIcon from '/src/asset/add_item_icon.svg'
import useModal from '../../hooks/useModal'
import ItemModal from '/src/components/Modal/ItemModal'
import classNames from 'classnames'

const NavBar = () => {
  const { open: openItemModal } = useModal('ItemModal')
  const handleClick = () => {
    openItemModal(<ItemModal />)
  }

  return (
    <>
      <nav className="w-[100vw] min-w-[1440px] h-20 flex justify-between items-center px-[20%] bg-white border border-[#e2ded8]">
        {/* <div className=" w-[1440px] h-20 justify-content bg-white border border-[#e2ded8]"> */}
        <Left />
        <Middle />
        <Right handleClick={handleClick} />
        {/* </div> */}
      </nav>
    </>
  )
}

const Left = () => {
  return (
    <div className="h-[42px]">
      <Link to="/">
        <img src={NavBarLogoImage} alt="로고" />
      </Link>
    </div>
  )
}
const Middle = () => {
  return (
    <div
      className={classNames(
        'mt-5',
        'flex gap-[50px] justify-start items-center',
        "text-[#665a48] font-['Noto_Sans KR'] leading-[normal] font-medium text-left text-sm min-w-[600px]"
      )}
    >
      <Link to="/thisweek" className="whitespace-pre-wrap  hover:text-[#9F8772] hover:font-bold">
        이번 주 구매
      </Link>

      <Link to="/calender" className="whitespace-pre-wrap  hover:text-[#9F8772] hover:font-bold ">
        스똑캘린더
      </Link>

      <Link to="/items" className="whitespace-pre-wrap  hover:text-[#9F8772] hover:font-bold ">
        항목 별 보기
      </Link>
    </div>
  )
}
const Right = ({ handleClick }) => {
  return (
    <div className="flex gap-[10px] items-center">
      <div className="mt-2">
        <button onClick={handleClick} className="w-[23px] h-[23]px ">
          <img src={AddItemIcon} />
        </button>
      </div>
      <Link to="/mypage" className="w-[23px] h-[23]px  ">
        <img src={MyPageIcon} />
      </Link>
    </div>
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
