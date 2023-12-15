import { IconArrowUpRight } from "@tabler/icons-react"
import Link from "next/link"

interface Article {
    id: string
    title: string
    views: number
}

const ArticleCard = (props: Article) => {

    const { id, title, views } = props

    return (
        <Link href={`/blog/${props.id}`} className="flex p-3 items-center flex-1 justify-between border border-neutral-300 bg-gray-700 rounded">
            <div>
                <h3 className="text-neutral-100 font-semibold">{title}</h3>
                <p className="text-neutral-400">{views.toLocaleString()} views</p>
            </div>
            <div>
                <IconArrowUpRight />
            </div>
        </Link>
    )
}

export default ArticleCard;