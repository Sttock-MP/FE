import 스똑메인1 from '/src/components/MainSlide/스똑메인 1.jpg'
import 스똑메인2 from '/src/components/MainSlide/스똑메인 2.jpg'
import 스똑메인3 from '/src/components/MainSlide/스똑메인 3.jpg'
import 스똑메인4 from '/src/components/MainSlide/스똑메인 4.jpg'
import 스똑메인5 from '/src/components/MainSlide/스똑메인 5.jpg'

export default function MainPageSlide() {
  return (
    <div>
      <img src={스똑메인1}></img>
      <img src={스똑메인4}></img>
      <img src={스똑메인5}></img>
      <img src={스똑메인3}></img>
      <img src={스똑메인2}></img>
    </div>
  )
}
