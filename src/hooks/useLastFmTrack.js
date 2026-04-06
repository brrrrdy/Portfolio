import { useEffect, useState } from "react";

const FALLBACK_LASTFM_USERNAME = "viptosomeone";
const FALLBACK_LASTFM_API_KEY = "fc4fed6917c1b7a8302ceeb67022aee9";
const REFRESH_INTERVAL_MS = 60000;

function useLastFmTrack() {
  const [trackPhrase, setTrackPhrase] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchRecentTrack() {
      const username =
        import.meta.env.VITE_LASTFM_USERNAME || FALLBACK_LASTFM_USERNAME;
      const apiKey =
        import.meta.env.VITE_LASTFM_API_KEY || FALLBACK_LASTFM_API_KEY;

      const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(
        username,
      )}&api_key=${apiKey}&format=json&limit=1`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const track = data?.recenttracks?.track?.[0];

        if (!track?.name || !track?.artist?.["#text"]) return;

        const phrase = `listening to ${track.name} by ${track.artist["#text"]} 🎶`;

        if (isMounted) {
          setTrackPhrase(phrase);
        }
      } catch (error) {
        console.error("Error fetching Last.fm track:", error);
      }
    }

    fetchRecentTrack();
    const intervalId = setInterval(fetchRecentTrack, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return trackPhrase;
}

export default useLastFmTrack;
