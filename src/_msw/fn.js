export const getMockProducts = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      data: DATA_LIST,
    })
  )
}

export const getMockProduct = (req, res, ctx) => {
  const { productId } = req.params
  return res(
    ctx.status(200),
    ctx.json({
      data: DATA_LIST[productId - 1],
    })
  )
}
export const postMockProducts = (req, res, ctx) => {
  return res(ctx.status(200))
}
export const DATA_LIST = [
  {
    productId: 1,
    category: '생활용품',
    purchaseDate: '2023-05-01',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '물티슈',
    purchaseAmount: 1000,
  },
  {
    productId: 2,
    category: '욕실용품',
    purchaseDate: '2023-05-30',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '욕실세정제',
    purchaseAmount: 1000,
  },
  {
    productId: 3,
    category: '헤어/바디',
    purchaseDate: '2023-06-03',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '샴푸',
    purchaseAmount: 1000,
  },
  {
    productId: 4,
    category: '스킨케어',
    purchaseDate: '2023-05-04',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '크림',
    purchaseAmount: 1000,
  },
  {
    productId: 5,
    category: '여성용품',
    purchaseDate: '2023-05-05',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '생리대',
    purchaseAmount: 1000,
  },
  {
    productId: 6,
    category: '구강용품/면도',
    purchaseDate: '2023-05-22',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '면도날',
    purchaseAmount: 1000,
  },
  {
    productId: 7,
    category: '주방용품',
    purchaseDate: '2023-05-20',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '키친타월',
    purchaseAmount: 1000,
  },
  {
    productId: 8,
    category: '기타',
    purchaseDate: '2023-05-20',
    regularDate: 5,
    regularCapacity: 5.3,
    name: '기타',
    purchaseAmount: 1000,
  },
]
