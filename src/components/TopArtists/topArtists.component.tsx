import useSWR from "swr"
import fetcher from "~/lib/fetcher"
import { TopArtistsResponse } from "~/lib/types"

const TopArtists = () => {
    const { data: topArtistsData } = useSWR<TopArtistsResponse[]>('/api/top-artists',fetcher);

    return (
        <div className="w-full p-4 bg-gray-700 rounded-md shadow-md mb-4">
            <h3 className="text-gray-300 text-xl font-semibold mb-1">Top Artists</h3>
            <p className="text-gray-400 mb-4">recently</p>
            <div className="px-1">
                {
                    topArtistsData && topArtistsData.map(artist => (
                        <a key={artist.url} href={artist.url} target="_blank" className="flex justify-between text-white transition-all items-center mb-2 hover:bg-gray-800 hover:shadow-lg rounded-md p-2">
                            <p>{artist.name}</p>
                            <p>{artist.playcount} <span className="text-gray-400">plays</span></p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default TopArtists;