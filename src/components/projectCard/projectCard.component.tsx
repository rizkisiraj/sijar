import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

interface Project {
    id: string
    name: string
    stack: string
}

const ProjectCard = (props: Project) => {
    const { id, name, stack } = props

    return (
        <Link href={`/project/${id}`} className="flex p-3 items-center flex-1 justify-between border border-neutral-300 bg-gray-700 rounded">
            <div>
                <h3 className="text-neutral-100 font-semibold">{name}</h3>
                <p className="text-neutral-400 text-sm">{stack}</p>
            </div>
            <div>
                <IconArrowUpRight />
            </div>
        </Link>
    )
}

export default ProjectCard