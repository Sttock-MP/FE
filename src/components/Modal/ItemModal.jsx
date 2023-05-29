import { useEffect, useState } from 'react'
import { CATEGORY_LIST, SUB_CATEGORY_LIST } from '../../data/data'
import PurchaseDatePicker from './purchaseDatePicker'

const wrapperStyle = 'flex justify-between mr-3'

const productMap = SUB_CATEGORY_LIST.reduce(
  (acc, item) => {
    acc[item.category.value].push(item)
    return acc
  },
  CATEGORY_LIST.reduce((acc, { value }) => ({ ...acc, [value]: [] }), {})
)

const randomNum = Math.random() * 4.9 + 0.1

function ItemModal({ onClose }) {
  const onSubmit = async () => {
    const result = await fetch('http://localhost:3000//users/{userId}/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: product.value,
        description: productName,
        category: category.value,
        standard: product.standard.value,
        purchaseDate: startDate,
        expectedPurchaseDate: endDate,
      }),
    })
    await result
    alert('상품이 추가되었습니다.')
    onClose()
  }
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState(null)
  const [product, setProduct] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [productCount, setProductCount] = useState('')

  const handleDropCategory = (e) => {
    const { value } = e.target
    setCategory(CATEGORY_LIST.filter((el) => el.value === value)[0])
  }

  const handleDropProduct = (e) => {
    const { value } = e.target
    setProduct(SUB_CATEGORY_LIST.filter((el) => el.category.value === value)[0])
  }

  useEffect(() => {
    setProduct(SUB_CATEGORY_LIST.filter((el) => el.category.value === category?.value)[0])
    console.log(category)
  }, [category])

  useEffect(() => {
    if (product === null || startDate === null || productCount === 0) {
      return
    }

    var newDate = new Date(startDate)
    newDate.setDate(newDate.getDate() + Math.floor(productCount / randomNum))
    setEndDate(newDate)
  }, [product, startDate, productCount])

  return (
    <>
      <div className="bg-[#00000090] fixed w-[100vw] h-[100vh] top-0" onClick={onClose} />
      <div className="fixed top-[15%] left-[17%] w-[900px]  h-[560px] border border-brown bg-white  justify-between flex p-[4rem] flex-col gap-1">
        <p className="text-3xl font-bold text-left text-darkBrown px-10">상품추가하기</p>
        <div className="h-[100%] flex flex-col px-[13rem] gap-[1rem] my-[3rem]">
          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown">카테고리</p>
            <div>
              <select
                className="w-[200px] text-sm font-medium text-left text-[#665a48] py-1 px-1 pr-8 h-8 bg-white border border-borderColor focus:outline-none focus:border-gray"
                onChange={handleDropCategory}
              >
                {CATEGORY_LIST.map((el) => {
                  return <option key={el.id}>{el.value}</option>
                })}
              </select>
            </div>
          </div>
          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown " placeholder="생리대-중형 ">
              상품별칭
            </p>
            <input
              className="pl-2 text-sm font-medium text-left w-[200px] border border-borderColor h-[28px]"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown">상품명</p>
            <div>
              {category ? (
                <select
                  className="w-[200px] text-sm font-medium text-left text-[#665a48] py-1 px-1 pr-8 h-7 bg-white border border-borderColor focus:outline-none focus:border-gray"
                  onChange={handleDropProduct}
                >
                  {productMap[category.value].map((el) => {
                    return <option key={el.id}>{el.name}</option>
                  })}
                </select>
              ) : (
                <div className="w-[200px] border border-borderColor h-[28px] bg-gray" />
              )}
            </div>
          </div>

          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown">구매량</p>
            <input
              type="number"
              className="pl-2 text-sm font-medium text-left w-[200px] border border-borderColor h-[28px]"
              value={productCount}
              onChange={(e) => setProductCount(Number(e.target.value))}
            />
          </div>
          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown">구매일</p>
            <div className="w-[200px] h-7 bg-white border border-borderColor">
              <PurchaseDatePicker startDate={startDate} setStartDate={setStartDate} />
            </div>
          </div>
          <div className={wrapperStyle}>
            <p className="text-sm font-medium text-left text-darkBrown">예상소진일자</p>
            <div className="w-[200px] h-7 bg-white border border-borderColor">
              <PurchaseDatePicker startDate={endDate} disabled={true} text="" />
            </div>
          </div>
        </div>
        <div className="flex justify-end pr-5 gap-[2rem]">
          <button className="w-[100px] h-[30px] bg-[#f6f4ef] border border-[#ebe4d9]">
            <p
              className="flex justify-center p-1 text-sm font-medium text-left text-darkBrown"
              onClick={onSubmit}
            >
              추가 완료
            </p>
          </button>
          <button className="w-[100px] h-[30px] bg-[#f6f4ef] border border-[#ebe4d9]">
            <p
              className="flex justify-center p-1 text-sm font-medium text-left text-darkBrown"
              onClick={onClose}
            >
              취소하기
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemModal
