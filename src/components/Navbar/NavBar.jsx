import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBarLogo from './NavBarLogo'
import MyPageIcon from './MyPageIcon'
import AddItemIcon from './AddItemIcon'
import classNames from 'classnames'
import AddItemModal from '../Modal/AddItemModal'

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => {
    setModalOpen(true)
  }

  return (
    <nav className="bg-b">
      <div className="h-20 top-0 left-0 mx-auto border-b border-[#e2ded8]">
        <div>
          <Link to="/">
            <NavBarLogo />
          </Link>
        </div>
        <div className="justify-between hidden md:flex  text-[#665a48] items-center font-['Noto_Sans KR'] leading-[normal] font-medium text-left text-sm">
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
        </div>
        <Link to="mypage">
          <MyPageIcon />
        </Link>

        <div>
          <button onClick={showModal}>
            <AddItemIcon />
          </button>
          {modalOpen && <AddItemModal setModalOpen={setModalOpen} />}
        </div>

        {/*모바일메뉴*/}
        <div className="md:hidden flex items-center ">
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
        <div className={classNames('md:hidden', { hidden: !menuToggle })}>
          반응형 메뉴 디자인 추가
        </div>
      </div>
    </nav>
  )
}

export default NavBar
