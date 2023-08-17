import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import TeamList from './components/TeamList.tsx'
import Signup from './components/Signup.tsx'

import empireData from '../data/empireMembers.ts'
import stormTrooperData from '../data/stormTroopers.ts'
import blurbs from '../data/blurbs.ts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route
        path="empire/ourPeople"
        element={
          <>
            <TeamList teamMembers={empireData} blurb={blurbs[0]} />
            <TeamList teamMembers={stormTrooperData} blurb={blurbs[1]} />
          </>
        }
      />
      <Route path="empire/signUp" element={<Signup />} />
      <Route path="republic/ourPeople/" element={<TeamList />} />
    </Route>
  )
)

export default router
