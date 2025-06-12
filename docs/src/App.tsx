import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className="mx-auto max-w-[1600px]">
      <Header />
      <div className="grid grid-flow-col grid-cols-[var(--container-sm)_minmax(0,1fr)] pt-[var(--header-h)] min-h-dvh">
        <Sidebar />
        <div className="mx-auto w-full max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
