// links to signup, Ourpeople, Home (stretch Rebels)
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li key="Home" className="selected">
          <Link to="/">Home</Link>
        </li>
        <li key="OurPeople">
          <Link to="/Signup">Signup</Link>
        </li>
        <li key="OurPeople">
          <Link to="/OurPeople">Our People</Link>
        </li>
      </ul>
    </div>
  )
}
