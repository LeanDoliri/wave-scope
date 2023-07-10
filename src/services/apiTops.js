import mockSongsTop200 from "../mocks/songsTop200.json";
import mockArtistsTop50 from "../mocks/artistsTop50.json";
import { getSearchArtist } from "./apiSearch";

export async function getSongsTop200({ countryCode }) {
  const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${countryCode}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dfd8c2187amshcdb50872f86c9a1p1a5409jsna6cf6902f153",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
    // console.log(result);
    // return result;

    return mockSongsTop200;
  } catch (error) {
    return error;
  }
}

export async function getArtistsTop50() {
  const url = "https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "dfd8c2187amshcdb50872f86c9a1p1a5409jsna6cf6902f153",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  async function SearchArtistsData({ name }) {
    const artistData = await getSearchArtist({ name });
    return artistData;
  }

  async function MakeTop50({ result }) {
    const top50 = [];
    const podium = result.slice(0, 3);
    for (let index = 0; index < podium.length; index++) {
      const name = podium[index].artist;
      const artistData = await SearchArtistsData({ name });
      podium[index].data = artistData;

      top50.push(podium[index]);
    }

    return top50;
  }

  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
    // const top50 = await MakeTop50({ result });
    // console.log(top50);
    // return top50;

    return mockArtistsTop50.slice(0, 3);
  } catch (error) {
    console.log(error);
  }
}
