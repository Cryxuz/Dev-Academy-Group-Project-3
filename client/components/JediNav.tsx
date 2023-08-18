import { Link } from 'react-router-dom'

// jedi nav no link
export default function JediNav({ OpenPopup }) {
  const handleButtonClick = () => {
    OpenPopup()
  }

  return (
    <div className="black">
      <div className="container">
        <nav className="jedi-nav">
          <img
            className="nav-img"
            src="../../Public/Images/Rebel.png"
            alt="rebel logo"
          />
          <Link className="nav-a" onClick={handleButtonClick} to="#">
            Rebels
          </Link>
          <Link className="nav-a" onClick={handleButtonClick} to="#">
            Report Sith Activity
          </Link>
          <Link className="nav-a" onClick={handleButtonClick} to="#">
            Sign up
          </Link>
        </nav>
      </div>
    </div>
  )
}
