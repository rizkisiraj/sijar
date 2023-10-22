import Layout from "~/components/Layout/layout.component";
import ComingSoon from "~/components/ComingSoon/comingSoon.component";
import Image from "next/image";
import spotifyPict from "public/spotify-pict.jpeg";
import { LastFmUserResponse } from "~/lib/types";
import useSWR from "swr";
import fetcher from "~/lib/fetcher";
import Stats from "~/components/Stats/stats.component";

export default function Dashboard() {
    const { data: lastFmData } = useSWR<LastFmUserResponse>('/api/scrobble', fetcher);

    return (
        <Layout title="Dashboard" logoPath="/dashboard-ico.png">
            <div className="font-sans">
                <h1 className="text-4xl text-white font-semibold mb-2">Dashboard</h1>
                <p className="font-light text-gray-300 text-sm mb-6">My personal hobby tracker.</p>
                <div className="w-full p-4 bg-gray-700 rounded-md shadow-md flex md:flex-row flex-col-reverse justify-between items-center mb-4">
                    <div className="flex justify-between flex-col">
                        <h3 className="text-gray-400 font-light mb-6">Spotify</h3>
                        <p className="text-xl text-gray-300">siraj</p>
                    </div>
                    <div className="shadow-sm">
                        <Image loading="lazy" placeholder="blur" className="mx-auto object-cover rounded-md" width={120} height={120} src={spotifyPict} alt="avatar" />
                    </div>
                </div>
                <Stats />
            </div>
        </Layout>
    )
}