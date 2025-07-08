import { Outlet, ScrollRestoration } from 'react-router'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-base-background mx-auto max-w-[1600px]">
        <Header />
        <div className="pt-(--header-h)"></div>
        <Navbar />
        <div className="grid grid-flow-col grid-cols-[var(--container-sm)_minmax(0,1fr)] max-md:grid-cols-[minmax(0,1fr)] min-h-dvh">
          <Sidebar isMobile={false} />
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default App
