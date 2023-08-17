import { Link } from 'react-router-dom'

interface Props {
  id: number
  name: string
  role: string
  picture: string
  url?: string
}

export default function OurPeople(member: Props) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={`${member.picture}`}
        alt={`${member.name}`}
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link to={`${member.url}`}>{`${member.name}`}</Link>
      </h3>
      <p>{`${member.role}`}</p>
    </div>
  )
}
