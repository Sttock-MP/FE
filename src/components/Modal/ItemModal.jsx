import ReactModal from 'react-modal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import dropdownIcon from '/Users/song-yeokyoung/Desktop/FE/src/asset/dropdown_icon.svg'
import CATEGORY_LIST from '../../data/data'
import PurchaseDatePicker from './purchaseDatePicker'

// 상품 추가하는 모달
// 1. 입력폼 구현
// 2. 데이터 값 넘겨주기
// 3. 카테고리, 계산기준에 들어가는 항목
// 4. 카테고리는 드롭다운으로 구현

function ItemModal({ isOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:3000//users/{userId}/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productName: data.productName,
        category: data.category,
        nickname: data.nickname,
        standard: data.standard,
        purchaseDate: data.purchaseDate,
        expectedPurchaseDate: data.purchaseDate,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('상품이 추가되었습니다.')
        //navigate 통해 메인으로 나가게 할지?
      })
  }
  const onError = (errors, e) => console.log(errors, e)
  const [selectedCategory, setSelectedCategory] = useState(['상품을 선택해주세요.'])
  const handleDropCategory = (e) => {
    const { value } = e.target
    setSelectedCategory(CATEGORY_LIST.filter((el) => el.value === value)[0].value)
  }

  return (
    <>
      <ReactModal
        className="fixed top-[15%] left-[17.5%] w-[900px] h-[560px] border border-brown bg-white  justify-between"
        isOpen={isOpen}
      >
        <div className="w-[100px] h-[30px] absolute left-[574px] top-[489px] bg-[#f6f4ef] border border-[#ebe4d9]">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            {errors.productName && errors}
            <input
              className="flex text-sm font-medium text-center m-auto p-1 text-[#665a48]"
              type="submit"
              value="추가완료"
            />
          </form>
        </div>
        <div className="w-[100px] h-[30px] absolute left-[724px] top-[489px] bg-[#f6f4ef] border border-[#ebe4d9]">
          <p className="flex justify-center p-1 text-sm font-medium text-left text-[#665a48]">
            취소하기
          </p>
        </div>

        <p className="absolute left-[151px] top-[106px] text-2xl font-bold text-left text-[#665a48]">
          상품추가하기
        </p>

        <p className="absolute left-[227px] top-[226px] text-sm font-medium text-left text-[#665a48]">
          상품별칭
        </p>
        <div>
          <input
            className="absolute bg-gray left-[365.5px] top-[226px]"
            {...register('test', { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        {/* 카테고리선택 */}
        <p className="absolute left-[227px] top-[174px] text-sm font-medium text-left text-[#665a48]">
          카테고리
        </p>
        <div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img src={dropdownIcon} />
          </span>
          <select
            className="w-[200px] text-sm font-medium text-left text-[#665a48] py-1 px-1 pr-8 h-7 absolute left-[365.5px] top-[171.5px] bg-white border border-[#ebe4d9] focus:outline-none focus:border-gray-500"
            onChange={handleDropCategory}
          >
            {CATEGORY_LIST.map((el) => {
              return <option key={el.id}>{el.value}</option>
            })}
          </select>
        </div>
        {/*구매일자 선택 */}
        <p className="absolute left-[227px] top-[378px] text-sm font-medium text-left text-[#665a48]">
          구매일
        </p>
        <div className="w-[200px] h-7 absolute left-[365px] top-[375px] bg-white border border-[#ebe4d9]">
          <PurchaseDatePicker />
        </div>
        {/* 예상소진일자 노출*/}
        <p className="absolute left-[227px] top-[428px] text-sm font-medium text-left text-[#665a48]">
          예상소진일자
        </p>
        {/* 직접 입력 받는 창 노출 */}
        <p className="absolute left-[593px] top-[429px] text-xs font-medium text-left text-[#665a48]">
          직접입력
        </p>

        <p className="absolute left-[227px] top-[328px] text-sm font-medium text-left text-[#665a48]">
          계산기준
        </p>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
      </ReactModal>
    </>
  )
}

export default ItemModal
