import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ModalsProvider } from './contexts/modal'

import router from './pages/router'
import { worker } from './_msw/browser'
worker.start()
// if (process.env.NODE_ENV === 'development') {
//   ;(async () => {
//     const { worker } = await import('./_msw/browser')
//     console.log('worker : ', worker)
//     worker.start()
//   })()
// }
// ;(async () => {
//   const { worker } = await import('./_msw/browser')
//   console.log('worker : ', worker)
//   worker.start()
// })()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ModalsProvider>
      <RouterProvider router={router} />
    </ModalsProvider>
  </React.StrictMode>
)
