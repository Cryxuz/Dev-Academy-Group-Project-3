// imgs of jedis

import { Link } from 'react-router-dom'

interface Jedi {
  name: string
  image: string
}

const jedi: Jedi[] = [
  {
    name: 'Luke Skywalker',
    image: '../../Public/Images/Luke.png',
  },
  {
    name: 'Mace Windu',
    image: '../../Public/Images/Mace.png',
  },
  {
    name: 'Yoda',
    image: '../../Public/Images/yoda.jpeg',
  },
  {
    name: 'ObiWan Kenobi',
    image: '../../Public/Images/Kenobi.png',
  },
]

export default function Jedi({ OpenPopup }) {
  const handleButtonClick = () => {
    OpenPopup()
  }
  return (
    <div className="jedi-profiles">
      {jedi.map((item, index) => (
        <div key={index}>
          <Link onClick={handleButtonClick} to="#">
            <img className="jedi-pic" src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}
