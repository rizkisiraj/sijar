export async function getTopArtists() {
    return fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rizkis890&api_key=${process.env.LASTFM_API_KEY || ''}&format=json&limit=10&period=7day&limit=5`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }