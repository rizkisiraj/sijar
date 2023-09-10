import Link from "next/link"

export interface Article {
    id: string
    title: string
    views: number
}

const ArticleLink= (props: Article) => {

    const { title, views } = props

    return (
        <>
            <div>
                <Link href="#" className="text-neutral-100 hover:underline decoration-indigo-300">{title}</Link>
                <p className="text-neutral-400">{views.toLocaleString()} views</p>
            </div>
        </>
    )
}

export default ArticleLink;