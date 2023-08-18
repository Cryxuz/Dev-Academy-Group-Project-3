import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'

import empireMembersData from '../../data/empireMembers.ts'
import stormTrooperData from '../../data/stormTroopers.ts'
import { useState } from 'react'

function App() {
  const location = useLocation()
  const empirePage = location.pathname !== '/'
  const [empireMembers, setEmpireMembers] = useState(empireMembersData)
  const [stormTroopers, setStormTroopers] = useState(stormTrooperData)

  return (
    <>
      {empirePage ? (
        <div>
          <NavBar />
          <div>
            <Outlet
              context={{
                empireMembers,
                stormTroopers,
                setEmpireMembers,
                setStormTroopers,
              }}
            />
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

export default App
