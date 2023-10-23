import { title } from "process";
import useSWR from "swr";
import fetcher from "~/lib/fetcher";
import { LastFmUserResponse, WakatimeStats } from "~/lib/types";


const Stats = () => {
    const { data: lastFmData } = useSWR<LastFmUserResponse>('/api/scrobble', fetcher);
    const { data: wakatimeData } = useSWR<WakatimeStats>('/api/wakatime', fetcher);

    const statsCard = [
        {
            title: "Spotify Plays",
            value: lastFmData?.playcount,
        },
        {
            title: "Coding Hours",
            value: Math.round(wakatimeData?.total_seconds as number / 3600),
        },
    ]

    return (
        <div className="w-full flex gap-4 flex-wrap mb-4">
            {
                statsCard.map(stat => {
                    return (
                        <div key={stat.title} className="flex-1 p-4 bg-gray-700 rounded-md shadow-md">
                            <h3 className=" text-gray-300 mb-2">{stat.title || '-'}</h3>
                            <p className="text-white text-xl font-semibold">{stat.value || '-'}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stats;