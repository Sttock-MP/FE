import { rest } from 'msw'
import { getMockProducts, postMockProducts, getMockProduct } from './fn'
export const handlers = [
  rest.post('/users/products', postMockProducts),
  rest.get('/users/products', getMockProducts),
  rest.get('/users/products/:productId', getMockProduct),
]
