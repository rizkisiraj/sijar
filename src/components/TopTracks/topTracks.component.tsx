import useSWR from "swr"
import fetcher from "~/lib/fetcher"
import { TopTracksResponse } from "~/lib/types"

const TopTracks = () => {
    const { data: topTracksData } = useSWR<TopTracksResponse[]>('/api/top-tracks',fetcher);

    return (
        <div className="w-full p-4 bg-gray-700 rounded-md shadow-md">
            <h3 className="text-gray-300 text-xl font-semibold mb-1">Top Tracks</h3>
            <p className="text-gray-400 mb-4">recently</p>
            <div className="px-1">
                {
                    topTracksData && topTracksData.map(track => (
                        <a key={track.url} href={track.url} target="_blank" className="flex justify-between text-white transition-all items-center mb-2 hover:bg-gray-800 hover:shadow-lg rounded-md p-2">
                            <p>{track.name}</p>
                            <p>{track.playcount} <span className="text-gray-400">plays</span></p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default TopTracks;