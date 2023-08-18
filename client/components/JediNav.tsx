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
            src="../../public/images/Rebel.png"
            alt="rebel logo"
          />
          <a className="nav-a" onClick={handleButtonClick} href="#">
            Rebels
          </a>{' '}
          <a className="nav-a" onClick={handleButtonClick} href="#">
            Report Sith Activity
          </a>{' '}
          <a className="nav-a" onClick={handleButtonClick} href="#">
            Sign up
          </a>
        </nav>
      </div>
    </div>
  )
}
