const CATEGORY_LIST = [
  { id: null, value: '카테고리 선택' },
  { id: 1, value: '생활용품' },
  { id: 2, value: '욕실용품' },
  { id: 3, value: '헤어/바디' },
  { id: 4, value: '스킨케어' },
  { id: 5, value: '여성용품' },
  { id: 6, value: '구강용품/면도' },
  { id: 7, value: '주방용품' },
  { id: 8, value: '기타' },
]

const STANDARD = [
  { id: 1, value: '용량' },
  { id: 2, value: '개수' },
]

const SUB_CATEGORY_LIST = [
  { id: 1, name: '물티슈', category: CATEGORY_LIST[1], standard: STANDARD[0] },
  { id: 2, name: '세탁세제', category: CATEGORY_LIST[1], standard: STANDARD[0] },
  { id: 3, name: '섬유유연제', category: CATEGORY_LIST[1], standard: STANDARD[0] },
  { id: 4, name: '미용티슈/각티슈', category: CATEGORY_LIST[1], standard: STANDARD[1] },
  { id: 5, name: '두루마리티슈/휴지', category: CATEGORY_LIST[1], standard: STANDARD[1] },
  { id: 6, name: '면봉', category: CATEGORY_LIST[1], standard: STANDARD[1] },
  { id: 7, name: '화장솜', category: CATEGORY_LIST[1], standard: STANDARD[1] },
  { id: 8, name: '욕실세정제', category: CATEGORY_LIST[2], standard: STANDARD[0] },
  { id: 9, name: '핸드워시/비누', category: CATEGORY_LIST[2], standard: STANDARD[0] },
  { id: 10, name: '샤워기필터', category: CATEGORY_LIST[2], standard: STANDARD[1] },
  { id: 11, name: '샴푸', category: CATEGORY_LIST[3], standard: STANDARD[0] },
  { id: 12, name: '트리트먼트/린스', category: CATEGORY_LIST[3], standard: STANDARD[0] },
  { id: 13, name: '바디워시', category: CATEGORY_LIST[3], standard: STANDARD[0] },
  { id: 14, name: '헤어스프레이/젤', category: CATEGORY_LIST[3], standard: STANDARD[0] },
  { id: 15, name: '헤어에센스', category: CATEGORY_LIST[3], standard: STANDARD[0] },
  { id: 16, name: '토너/스킨', category: CATEGORY_LIST[4], standard: STANDARD[0] },
  { id: 17, name: '크림', category: CATEGORY_LIST[4], standard: STANDARD[0] },
  { id: 18, name: '클렌징', category: CATEGORY_LIST[4], standard: STANDARD[0] },
  { id: 19, name: '로션', category: CATEGORY_LIST[4], standard: STANDARD[0] },
  { id: 20, name: '선크림', category: CATEGORY_LIST[4], standard: STANDARD[0] },
  { id: 21, name: '생리대', category: CATEGORY_LIST[5], standard: STANDARD[2] },
  { id: 22, name: '여성청결제', category: CATEGORY_LIST[5], standard: STANDARD[1] },
  { id: 23, name: '면도날', category: CATEGORY_LIST[6], standard: STANDARD[1] },
  { id: 24, name: '쉐이빙폼', category: CATEGORY_LIST[6], standard: STANDARD[1] },
  { id: 25, name: '칫솔', category: CATEGORY_LIST[6], standard: STANDARD[1] },
  { id: 26, name: '치약', category: CATEGORY_LIST[6], standard: STANDARD[0] },
  { id: 27, name: '치실', category: CATEGORY_LIST[6], standard: STANDARD[1] },
  { id: 28, name: '면도기', category: CATEGORY_LIST[6], standard: STANDARD[0] },
  { id: 29, name: '가글', category: CATEGORY_LIST[6], standard: STANDARD[1] },
  { id: 30, name: '키친타월', category: CATEGORY_LIST[7], standard: STANDARD[1] },
  { id: 31, name: '수세미', category: CATEGORY_LIST[7], standard: STANDARD[0] },
  { id: 32, name: '주방세제', category: CATEGORY_LIST[7], standard: STANDARD[1] },
  { id: 33, name: '정수기필터', category: CATEGORY_LIST[7], standard: STANDARD[1] },
  { id: 34, name: '기타', category: CATEGORY_LIST[8], standard: null },
]

const test = '욕실용품'

SUB_CATEGORY_LIST.filter((item) => item.category === test).map((item) => item.name)

export { CATEGORY_LIST, SUB_CATEGORY_LIST, STANDARD }
