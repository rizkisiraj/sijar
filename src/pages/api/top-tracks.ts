/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { NextRequest } from "next/server";
import { getTopTracks } from "../../lib/spotify";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const resp = await getTopTracks();

  if (resp.status !== 200) {
    return new Response(JSON.stringify(await resp.json()), {
      status: resp.status,
    });
  }

  const response: {toptracks : {
    track: {
        name: string,
        playcount: number,
        url: string
    }[]
  }} = await resp.json();

  const tracks = response.toptracks.track;

  const topTracks = tracks.map((track) => {
    return {
      name: track.name,
      playcount: track.playcount,
      url: track.url,
    };
  });

  return new Response(JSON.stringify(topTracks), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400",
    },
  });
}