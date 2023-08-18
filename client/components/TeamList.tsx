import TeamMember from './TeamMember.tsx'

interface blurb {
  id: string
  title: string
  description: string
}

interface Props {
  teamMembers: teamMember[]
  blurb: blurb
}

interface teamMember {
  id: number
  name: string
  role: string
  picture: string
  url?: string
}

export default function TeamList({ teamMembers, blurb }: Props) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {blurb.title}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {blurb.description}
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((x) => {
            return (
              <TeamMember
                key={x.id}
                id={x.id}
                name={x.name}
                role={x.role}
                picture={x.picture}
                url={x.url}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
