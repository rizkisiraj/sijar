import Head from 'next/head'
import type { ReactElement } from 'react'
import Navbar from '../Navbar/navbar.components';
import MobileNav from '../MobileNav/mobileNav.component';

const Layout = ({ children, title, logoPath }: { children: ReactElement, title: string, logoPath: string }) => {
    return (
        <>
        <Head>
            <title>Rizki Siraj // {title}</title>
            <meta name="description" content="A portofolio website of Muhammad Rizki Siraj" />
            <link rel="icon" href={logoPath} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
            <main className={`bg-gray-900 min-h-screen px-4 py-6 font-sans flex flex-col`}>
                <div className='w-[6%] fixed left-0 h-full z-50 hidden lg:block md:block'>
                    <Navbar />
                </div>
                <MobileNav />
                <section className={`max-w-2xl h-full w-full mx-auto py-4 flex-1`}>
                    {children}
                </section>
                <footer className={`w-full dark:text-gray-400 bg-gray-900 font-sans text-sm py-4`}>
                    <div className="w-full max-w-2xl mx-auto text-center">
                    <p><a className=" text-white underline underline-offset-4 decoration-dotted" href="https://opensource.org/license/mit/" target="_blank">MIT</a> 2023-present &copy; <a className="underline underline-offset-4 decoration-dotted text-white" href="github.com/rizkisiraj" target="_blank">siraj</a></p>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Layout