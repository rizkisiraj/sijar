import Link from "next/link"
import { IconHome2, IconDashboard, IconArticle, IconPaperclip, IconBook, TablerIconsProps } from "@tabler/icons-react"
import { useRouter } from "next/router";

interface LinkComponent {
    path: string
    name: string,
    icon: (props: TablerIconsProps) => JSX.Element
}

const links: LinkComponent[] = [
    {
        icon: IconHome2,
        name: "Home",
        path: "/"
    },
    {
        icon: IconBook,
        name: "Guestbook",
        path: "/guestbook"
    },
    {
        icon: IconArticle,
        name: "Blogs",
        path: "/blog"
    },
    {
        icon: IconDashboard,
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: IconPaperclip,
        name: "Links",
        path: "/links"
    },
]


const Navbar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    console.log(currentRoute.includes("blog"))

    return (
        <nav className={`flex flex-col items-center h-full`}>
            <div className='flex flex-col gap-4 pb-4'>
                {
                    links.map(link => {
                        return (
                            <Link  key={link.name} href={link.path} className={`p-2 ${link.path === currentRoute ? 'bg-gray-700' : (currentRoute.includes("blog") ? 'bg-gray-700'  : 'bg-gray-800')} rounded relative hover:scale-105 transition-transform`} aria-label="">
                                <link.icon size={18} className='text-white' />
                                <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>{link.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='border-r-2 border-gray-700 h-full'>
            </div>
        </nav>
    )
}

export default Navbar