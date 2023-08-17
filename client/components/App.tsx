import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
// Header, Footer, Nav

export default App
