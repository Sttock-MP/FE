import { useState, useEffect } from 'react'
import 스똑메인1 from '../components/MainSlide/스똑메인 1.jpg'
import 스똑메인2 from '../components/MainSlide/스똑메인 2.jpg'
import 스똑메인3 from '../components/MainSlide/스똑메인 3.jpg'
import 스똑메인4 from '../components/MainSlide/스똑메인 4.jpg'
import 스똑메인5 from '../components/MainSlide/스똑메인 5.jpg'
import ItemModal from '../components/Modal/ItemModal'

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
      <img src={스똑메인1}></img>
      <img src={스똑메인4}></img>
      <img src={스똑메인5}></img>
      <img src={스똑메인3}></img>
      <img src={스똑메인2}></img>

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
