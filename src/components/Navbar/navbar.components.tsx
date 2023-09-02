import Link from "next/link"
import { IconHome2, IconDashboard, IconArticle, IconPaperclip, IconBook } from "@tabler/icons-react"

const Navbar = () => {
    return (
        <nav className={`flex flex-col items-center h-full`}>
            <div className='flex flex-col gap-4 pb-4'>
                <Link href="/" className='p-2 bg-gray-700 rounded relative hover:scale-105 transition-transform' aria-label="">
                    <IconHome2 size={18} className='text-white' />
                    <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>Home</span>
                </Link>
                <Link href="/guestbook" className='p-2 bg-gray-800 rounded relative hover:scale-105 transition-transform'>
                    <IconBook size={18} className='text-white' />
                    <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>Guestbook</span>
                </Link>
                <Link href="/blog" className='p-2 bg-gray-800 rounded relative hover:scale-105 transition-transform'>
                    <IconArticle size={18} className='text-white' />
                    <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>Blog</span>
                </Link>
                <Link href="/dashboard" className='p-2 bg-gray-800 rounded relative hover:scale-105 transition-transform'>
                    <IconDashboard size={18} className='text-white' />
                    <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>Dashboard</span>
                </Link>
                <Link href="/links" className='p-2 bg-gray-800 rounded relative hover:scale-105 transition-transform'>
                    <IconPaperclip size={18} className='text-white' />
                    <span className='absolute h-full block text-sm text-white font-light left-10 top-0 bg-inherit p-2 rounded'>Links</span>
                </Link>
            </div>
            <div className='border-r-2 border-gray-700 h-full'>
            </div>
        </nav>
    )
}

export default Navbar