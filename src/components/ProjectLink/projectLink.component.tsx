import { IconArrowRight } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
    id: string
    name: string
    stack: string,
    image: string,

}

const ProjectLink= (props: Project) => {

    const { id,name, stack, image } = props

    return (
        <>
            <div className="p-4 border border-neutral-400 rounded-lg">
                <h3 className="text-neutral-100 text-lg font-semibold decoration-indigo-300">{name}</h3>
                <p className="text-neutral-400 text-xs mb-4">{stack}</p>
                <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-4">
                    <Image src={image} alt="cover" fill objectFit="cover" />
                </div>
                <Link className="inline-block text-sm group text-white" href={`/project/${id}`}>See More <IconArrowRight className="group-hover:translate-x-1 transition-transform inline-block" size={16} /></Link>
            </div>
        </>
    )
}

export default ProjectLink;