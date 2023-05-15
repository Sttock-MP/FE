import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/Mainpage'
import NotFound from './pages/NotFound'
import ProtectedRoute from './pages/ProtectedRoute'
import Calender from './pages/Calender'
import ThisWeek from './pages/ThisWeek'
import Items from './pages/Items'
import ItemsDetail from './pages/ItemsDetail'
import MyPage from './pages/MyPage'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <MainPage /> }, //마이페이지와 404 페이지 외 다른페이지 모두 ProtectedRoute 상태
      {
        path: '/calender',
        element: (
          <ProtectedRoute>
            <Calender />
          </ProtectedRoute>
        ),
      },
      {
        path: '/thisweek',
        element: (
          <ProtectedRoute>
            <ThisWeek />
          </ProtectedRoute>
        ),
      },
      {
        path: '/items',
        element: (
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        ),
      },
      {
        path: '/items/:id',
        element: (
          <ProtectedRoute>
            <ItemsDetail />
          </ProtectedRoute>
        ),
      },
      {
        path: '/mypage',
        element: (
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
