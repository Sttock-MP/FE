import { useEffect, useState } from 'react'
import axios from 'axios'
import useModal from '../../hooks/useModal'
import { ProgressBar, SWITCH_ICON, Icon, makListByBuyList } from '../../pages/ThisWeek'
import ModifyProductModal from './ModifyProductModal'

const useProductItem = (id) => {
  const [item, setItem] = useState(null)

  useEffect(() => {
    axios.get(`/users/products/${id}`).then((res) => setItem(makListByBuyList(res.data.data)))
  }, [])

  return { item }
}

function ProductModal({ onClose, id }) {
  const { open: openItemModal } = useModal('modifyProdutModal')

  const { item } = useProductItem(id)

  const handleClick = () => {
    openItemModal(<ModifyProductModal item={item} />)
  }

  const handleDelete = async () => {
    const result = await fetch(`http://localhost:3000//users/{userId}/products/%{item.productId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
    await result
    alert('상품이 삭제되었습니다.')
    onClose()
  }
  if (!item) return
  const { name, category, usedPercent, remain, purchaseDate, usedDay } = item
  return (
    <>
      <div className="bg-[#00000090] fixed w-[100vw] h-[100vh] top-0" onClick={onClose} />
      <div className="fixed top-[15%] left-[17.5%] w-[900px] h-[560px] border border-brown bg-white  justify-between flex p-[4rem] flex-col gap-1">
        <p className="text-2xl font-bold text-left text-darkBrown">상세보기</p>
        <div className="flex justify-between items-center px-[3rem]">
          <Icon SVG={SWITCH_ICON[category]} />
          <span className="font-medium text-[20px] leading-5 font-[#665A48] w-[65px] truncate text-darkBrown">
            {name}
          </span>
          <div className="flex gap-[31px]">
            <ProgressBar usedPercent={usedPercent} />
            <span>{remain}일 남음</span>
          </div>
        </div>
        <div className="flex gap-[8rem] ml-[10px] justify-center ">
          <p className="text-[17px] font-medium text-left text-bold text-darkBrown mr-7">
            재고정보
          </p>
          <div className="flex flex-col gap-[1.5rem] mr-4">
            <p className="text-sm font-medium text-left text-darkBrown">
              {name}의 예상 소진일은 {remain} 일입니다.
            </p>
            <p className="text-sm font-medium text-left text-darkBrown">카테고리: {category}</p>
            <p className="text-sm font-medium text-left text-darkBrown">
              구매일: {makeBuyDate(purchaseDate)}
              <span className="text-red-400 "> {usedDay}일 경과 </span>
            </p>
            {/* <p className="text-sm font-medium text-left text-darkBrown">
              계산기준:
              {SUB_CATEGORY_LIST.filter((el) => el.category.value === category)[0]?.standard?.value}
            </p> */}
          </div>
        </div>
        <div className="flex justify-center gap-[3rem]">
          <button className="w-[100px] h-[30px] bg-[#f6f4ef] border border-[#ebe4d9]">
            <p
              className="flex justify-center p-1 text-sm font-medium text-left text-darkBrown"
              onClick={handleClick}
            >
              수정하기
            </p>
          </button>
          <button className="w-[100px] h-[30px] bg-[#f6f4ef] border border-[#ebe4d9]">
            <p
              className="flex justify-center p-1 text-sm font-medium text-left text-darkBrown"
              onClick={handleDelete}
            >
              삭제하기
            </p>
          </button>
          <button className="w-[100px] h-[30px] bg-[#f6f4ef] border border-[#ebe4d9]">
            <p
              className="flex justify-center p-1 text-sm font-medium text-left text-darkBrown"
              onClick={onClose}
            >
              닫기
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProductModal

const makeBuyDate = (purchaseDate) => {
  console.log('purchaseDate : ', purchaseDate)
  const [yyyy, mm, dd] = purchaseDate.split('-')
  return [yyyy.slice(2), mm, dd].join('.')
}
