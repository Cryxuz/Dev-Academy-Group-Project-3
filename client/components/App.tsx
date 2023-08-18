import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'

function App() {
  const location = useLocation()
  const empirePage = location.pathname !== '/'
  return (
    <>
      {empirePage ? (
        <div>
          <NavBar />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  )
}
// Header, Footer, Nav

export default App
