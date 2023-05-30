import { useState, useEffect } from 'react'
import ItemModal from '../components/Modal/ItemModal'
import MainPageSlide from '../components/MainSlide/MainPageSlide'

export default function MainPage() {
  const [top, setTop] = useState(300)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setTop(650)
    } else {
      setTop(300)
    }
  }

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(true)
  }
  return (
    <div>
      <MainPageSlide />
      <div
        onClick={handleOpenModal}
        className="fixed left-1/2 transform -translate-x-1/2"
        style={{ top: `${top > 330 ? 580 : 400}px`, transition: 'top 0.5s ease-in-out' }}
      >
        <div className="relative">
          <button className="w-[120px] h-[50px] rounded-full bg-darkBrown text-white text-md">
            상품추가하기
          </button>
        </div>
      </div>
      {isOpen && <ItemModal onClose={() => setIsOpen(false)} />}
    </div>
  )
}
