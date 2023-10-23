/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { NextRequest } from "next/server";
import { getTopArtists } from "../../lib/spotify";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const resp = await getTopArtists();

  if (resp.status !== 200) {
    return new Response(JSON.stringify(await resp.json()), {
      status: resp.status,
    });
  }

  const response: {topartists : {
    artist: {
        name: string,
        playcount: number,
        url: string
    }[]
  }} = await resp.json();

  const artists = response.topartists.artist;

  const topArtists = artists.map((artist) => {
    return {
      name: artist.name,
      playcount: artist.playcount,
      url: artist.url,
    };
  });

  return new Response(JSON.stringify(topArtists), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "public, s-maxage=86400",
    },
  });
}