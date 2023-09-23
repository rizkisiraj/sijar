import Link from "next/link"
import { IconHome2, IconDashboard, IconArticle, IconPaperclip, IconBook, TablerIconsProps, IconSourceCode } from "@tabler/icons-react"
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
        icon: IconSourceCode,
        name: "Projects",
        path: "/project"
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


const MobileNav = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <div className="w-full max-w-md p-4 h-auto left-1/2 -translate-x-1/2 fixed bottom-4 md:hidden">
        <nav className={`w-full backdrop-blur-sm rounded bg-gray-800/50 p-4 overflow-x-scroll`}>
            <div className='flex justify-evenly gap-4'>
                {
                    links.map(link => {
                        return (
                            <Link aria-labelledby={link.name} key={link.name} href={link.path} className={`p-2 ${link.path === currentRoute ? 'bg-gray-700' : (link.path === "/blog" && currentRoute.includes("blog") ? 'bg-gray-700'  : 'bg-gray-800')} rounded relative hover:scale-105 transition-transform`} aria-label="">
                                <link.icon size={18} className='text-white' />
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
        </div>
    )
}

export default MobileNav