export async function getTopArtists() {
    return fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rizkis890&api_key=${process.env.LASTFM_API_KEY || ''}&format=json&period=7day&limit=5`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
}

export async function getTopTracks() {
  return fetch(
    `http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rizkis890&api_key=${process.env.LASTFM_API_KEY || ''}&format=json&period=7day&limit=5`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}