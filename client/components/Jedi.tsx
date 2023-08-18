// imgs of jedis

interface Jedi {
  name: string
  image: string
}

const jedi: Jedi[] = [
  {
    name: 'Luke Skywalker',
    image: '../../public/images/Luke.png',
  },
  {
    name: 'Mace Windu',
    image: '../../public/images/Mace.png',
  },
  {
    name: 'Yoda',
    image: '../../public/images/yoda.jpeg',
  },
  {
    name: 'ObiWan Kenobi',
    image: '../../public/images/Kenobi.png',
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
          <a onClick={handleButtonClick} href="#">
            <img className="jedi-pic" src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}
