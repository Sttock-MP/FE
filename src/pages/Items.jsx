import classNames from 'classnames'
import DropDownIcon from '/src/asset/dropdown_icon.svg'
import LifeItem from '/src/asset/LifeItem1.svg'
import HairItem from '/src/asset/HairItem.svg'
import KitchenItem from '/src/asset/KitchenItem.svg'
import BathItem from '/src/asset/BathItem.svg'
import WomenItem from '/src/asset/WomenItem.svg'
import SkinItem from '/src/asset/SkinItem.svg'
import TeethIcon from '/src/asset/TeethIcon.svg'
import EtcItem from '/src/asset/EtcItem.svg'
import Export from '/src/asset/export_icon.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useModal from '../hooks/useModal'
import ProductModal from '../components/Modal/productModal'

export default function Items() {
  const { buyList, list } = useBuyList()
  const { selectCategory, handleCategory } = useSelectCategory()
  const { selectSort, handleSort } = useSelectSort()
  const selectList = makeCategoryList(buyList)
  const itemList = makeItemList(list, selectCategory, selectSort)

  return (
    <div className="min-w-[1440px] px-[20%] ">
      <Title />
      <Selector
        selectList={selectList}
        handleCategory={handleCategory}
        handleSort={handleSort}
        selectCategory={selectCategory}
        selectSort={selectSort}
      />
      <ItemList list={itemList} />
    </div>
  )
}

const Title = () => {
  return (
    <div className="mt-[50px] w-[960px]">
      <div className="flex gap-[14px]  mb-[10px] items-end">
        <h1 className="font-bold text-[24px] week_title leading-[35px] text-[#665A48]">
          항목별보기
        </h1>
      </div>
      <div className="w-full h-[1px] border-[1px] border-[#E2DED8]" />
    </div>
  )
}

const Selector = ({ selectList, handleCategory, handleSort, selectSort, selectCategory }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleDropDown = () => setIsOpen((prev) => !prev)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const handleToggleSortDropDown = () => setIsSortOpen((prev) => !prev)
  return (
    <div className="flex justify-between items-end  w-full px-5 mt-5 mb-4 h-[20px]">
      <div className="relative">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleDropDown}>
          <img src={DropDownIcon} />
          <span>{selectCategory}</span>
        </div>
        {isOpen && (
          <DropDown
            list={selectList}
            onClick={(e) => {
              handleCategory(e)
              setIsOpen(false)
            }}
          />
        )}
      </div>
      <div className="relative">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleToggleSortDropDown}>
          <img src={DropDownIcon} />
          <span>{selectSort}</span>
        </div>
        {isSortOpen && (
          <DropDown
            onClick={(e) => {
              handleSort(e)
              setIsSortOpen(false)
            }}
            list={[
              { id: 1, title: '소진 임박순' },
              { id: 2, title: '최근 등록순' },
            ]}
          />
        )}
      </div>
    </div>
  )
}

const DropDown = ({ list, onClick }) => {
  return (
    <ul
      className={classNames(
        'absolute top-[30px] left-0 flex flex-col items-center gap-1 ',
        'min-w-[100px] w-fit',
        'bg-white border-[1px] border-solid border-[#665A48] text-shadow',
        'rounded-[5px]',
        'cursor-pointer'
      )}
    >
      {list.map((item) => (
        <li
          key={item.id}
          className="text-center w-fit px-2 py-1"
          onClick={onClick}
          value={item.title}
          data-value={item.title}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}
const ItemList = ({ list }) => {
  return (
    <ul className="flex flex-col gap-[30px]">
      {list.map((item) => (
        <Item {...item} key={item.productId} />
      ))}
    </ul>
  )
}

const Item = ({ productId, category, name, remain, usedPercent }) => {
  const { open: openItemModal } = useModal('productModal')
  const handleClick = () => {
    openItemModal(<ProductModal id={productId} />)
  }
  return (
    <li
      className={classNames(
        'w-[960px] h-[100px]',
        'flex justify-between items-center px-[53px] py-[20px]',
        'bg-white border-[1px] border-solid border-[#F7F4EF]'
      )}
    >
      <Icon SVG={SWITCH_ICON[category]} />
      <span className="font-medium text-[14px] leading-5 font-[#665A48] w-[65px] truncate">
        {name}
      </span>
      <div className="flex gap-[31px]">
        <ProgressBar usedPercent={usedPercent} />
        <span>{remain}일 남음</span>
      </div>
      <Detail onClick={handleClick} />
    </li>
  )
}

export const Icon = ({ SVG }) => {
  return (
    <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#9F8772] rounded-full">
      <img src={SVG} />
    </div>
  )
}

export const ProgressBar = ({ usedPercent }) => {
  return (
    <div className="w-[300px] h-[15px] bg-[#F7F4EF] text-shadow rounded-[10px] relative">
      <div
        className="h-[15px] bg-[#EBE4D9] text-shadow rounded-l-[10px]"
        style={{ width: `${usedPercent}px` }}
      />
    </div>
  )
}
const Detail = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      <img src={Export} />
      <span className="font-medium text-[14px] leading-5 text-[#9F8772]">상세보기</span>
    </div>
  )
}
export const SWITCH_ICON = {
  생활용품: LifeItem,
  욕실용품: BathItem,
  '헤어/바디': HairItem,
  스킨케어: SkinItem,
  여성용품: WomenItem,
  '구강용품/면도': TeethIcon,
  주방용품: KitchenItem,
  기타: EtcItem,
}

const useBuyList = () => {
  const [buyList, setBuyList] = useState([])
  const list = buyList.map(makListByBuyList)
  useEffect(() => {
    axios.get('/users/products').then((res) => setBuyList(res.data.data))
  }, [])
  return { buyList, list }
}

const useSelectCategory = () => {
  const [selectCategory, setSelectCategory] = useState('전체')
  const handleCategory = (e) => {
    setSelectCategory(e.target.getAttribute('data-value'))
  }
  return { selectCategory, handleCategory }
}
const useSelectSort = () => {
  const [selectSort, setSelectSort] = useState('소진 임박순')
  const handleSort = (e) => setSelectSort(e.target.getAttribute('data-value'))
  return { selectSort, handleSort }
}

export const makListByBuyList = (item) => {
  const usedDay = calculateDaysPassed(item.purchaseDate)
  const usedAmount = item.regularDate ?? item.regularCapacity
  const remain = usedDay - usedAmount
  const usedPercent = Math.floor(item.purchaseAmount / remain)
  const newItem = { ...item, remain, usedPercent, usedDay }
  return newItem
}

const calculateDaysPassed = (startDate) => {
  const oneDay = 24 * 60 * 60 * 1000 // 1일의 밀리초 단위
  const today = new Date() // 오늘 날짜
  const start = new Date(startDate) // 시작 날짜
  const diffDays = Math.round(Math.abs((today - start) / oneDay))
  return diffDays
}

const makeCategoryList = (buyList) => {
  const set = new Set()
  buyList.forEach((item) => set.add(item.category))
  const arr = ['전체', ...set].map((item, i) => ({ id: i, title: item }))
  return arr
}

const makeItemList = (list, category, sortItem) => {
  return list
    .filter((item) => {
      if (category === '전체') return true
      return item.category === category
    })
    .sort((a, b) => {
      if (sortItem === '소진 임박순') {
        return a.remain - b.remain
      }
      if (sortItem === '최근 등록순') {
        return a.purchaseDate - b.purchaseDate
      }
      return a.productId - b.productId
    })
}
