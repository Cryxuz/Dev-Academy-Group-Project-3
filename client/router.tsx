import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
// import Home from './components/Home'
import Signup from './components/Signup.tsx'

import OurPeople from './components/OurPeople.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* <Route index element={<Home />} /> */}
      <Route path="empire/ourPeople" element={<OurPeople />} />
      <Route path="empire/signUp" element={<Signup />} />
      {/* <Route path="republic/ourPeople/" element={<TeamList />} /> */}
    </Route>
  )
)

export default router
