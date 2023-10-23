import Layout from "~/components/Layout/layout.component";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";
import Image from "next/image";
import spotifyPict from "public/spotify-pict.webp";
import Stats from "~/components/Stats/stats.component";
import TopArtists from "~/components/TopArtists/topArtists.component";

export default function Dashboard() {
    return (
        <Layout title="Dashboard" logoPath="/dashboard-ico.png">
            <div className="font-sans">
                <h1 className="text-4xl text-white font-semibold mb-2">Dashboard</h1>
                <p className="font-light text-gray-300 text-sm mb-6">idk, i just feel like it.</p>
                <div className="w-full p-4 bg-gray-700 rounded-md shadow-md flex md:flex-row flex-col-reverse justify-between items-center mb-4">
                    <div className="flex justify-between flex-col">
                        <h3 className="text-gray-400 font-light mb-6 md:block hidden">Spotify</h3>
                        <a target="_blank" href="https://open.spotify.com/user/fvf2renmfrowr7a9gh3ecp97t?si=eb7012d7c5f44709" className="text-xl text-gray-300 hover:underline">siraj</a>
                    </div>
                    <div className="shadow-sm w-[120px] h-[120px]">
                        <Image className="rounded-md h-full w-full object-cover" loading="lazy" placeholder="blur" width={120} height={120} src={spotifyPict} alt="avatar" />
                    </div>
                </div>
                <Stats />
                <TopArtists />
            </div>
        </Layout>
    )
}