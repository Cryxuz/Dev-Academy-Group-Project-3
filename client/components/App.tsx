import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'

import empireMembersData from '../../data/empireMembers.ts'
import stormTrooperData from '../../data/stormTroopers.ts'
import { useState } from 'react'

function App() {
  const [empireMembers, setEmpireMembers] = useState(empireMembersData)
  const [stormTroopers, setStormTroopers] = useState(stormTrooperData)

  return (
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
  )
}

export default App
