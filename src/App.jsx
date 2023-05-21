import { Outlet } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root') // 모달 렌더링을 위한 기준이 되는 root element 설정

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
