import teamMember from '../../models/index.ts'
import blurbs from '../../data/blurbs.ts'
import TeamList from './TeamList.tsx'
import { useOutletContext } from 'react-router-dom'

interface dataContext {
  empireMembers: teamMember[]
  stormTroopers: teamMember[]
}

export default function OurPeople() {
  const { empireMembers, stormTroopers } = useOutletContext<dataContext>()

  return (
    <>
      <TeamList teamMembers={empireMembers} blurb={blurbs[0]} />
      <TeamList teamMembers={stormTroopers} blurb={blurbs[1]} />
    </>
  )
}
