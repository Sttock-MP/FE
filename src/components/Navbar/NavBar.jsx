import { Link } from 'react-router-dom'
import NavBarLogo from './NavBarLogo'
import MyPageIcon from './MyPageIcon'
import AddItemICon from './AddItemIcon'

const NavBar = () => {
  return (
    <header className="flex justify-between w-screen h-20 top-0 left-0 bg-b border-b border-[#e2ded8]" >
      <div className="">
        <Link to="/">
          <NavBarLogo />
        </Link>

        <Link
          to="/thisweek"
          className="whitespace-pre-wrap absolute top-[49px] left-[489px] font-['Noto_Sans KR'] text-sm leading-[normal] font-medium text-left text-[#665a48]"
        >
          이번 주 구매
        </Link>

        <Link
          to="/calender"
          className="whitespace-pre-wrap absolute top-[49px] left-[610px] font-['Noto_Sans KR'] text-sm leading-[normal] font-medium text-left text-[#665a48]"
        >
          스똑캘린더
        </Link>

        <Link
          to="/items"
          className="whitespace-pre-wrap absolute top-[49px] left-[728px] font-['Noto_Sans KR'] text-sm leading-[normal] font-medium text-left text-[#665a48]"
        >
          항목 별 보기
        </Link>
        <Link to="mypage">
          <MyPageIcon />
        </Link>
        <Link to="/items">
          <AddItemICon />
        </Link>
      </div>
    </header>
  )
}

export default NavBar
