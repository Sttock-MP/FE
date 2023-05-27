import App from '../App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import NotFound from '../pages/NotFound'
import ProtectedRoute from '../pages/ProtectedRoute'
import Calender from '../pages/Calender'
import ThisWeek from '../pages/ThisWeek'
import Items from '../pages/Items'
import ItemsDetail from '../pages/ItemsDetail'
import MyPage from '../pages/MyPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <MainPage /> }, //마이페이지와 404 페이지 외 다른페이지 모두 ProtectedRoute 상태
      {
        path: '/calender',
        element: <Calender />,
      },
      {
        path: '/thisweek',

        element: <ThisWeek />,
      },
      {
        path: '/items',
        element: <Items />,
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
        element: <MyPage />,
      },
    ],
  },
])

export default router
