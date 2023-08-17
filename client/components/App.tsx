import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
// Header, Footer, Nav

export default App
