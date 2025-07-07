import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { ThemeProvider } from './contexts/ThemeContext'
import './App.css'
import { Outlet, ScrollRestoration } from 'react-router'

function App() {

  return (
    <ThemeProvider>
      <div className="bg-base-background mx-auto max-w-[1600px]">
        <Header />
        <div className="grid grid-flow-col grid-cols-[var(--container-sm)_minmax(0,1fr)] gap-8 pt-[var(--header-h)] min-h-dvh">
          <Sidebar />
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-[1fr_auto] gap-4 min-h-dvh">
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </ThemeProvider>
  )
}

export default App
