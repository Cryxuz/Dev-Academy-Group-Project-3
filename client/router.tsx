import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import OurPeople from './components/OurPeople'
import SignUp from './components/Signup'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="OurPeople" element={<OurPeople />} />
      <Route path="SignUp" element={<SignUp />} />
    </Route>
  )
)

export default router
