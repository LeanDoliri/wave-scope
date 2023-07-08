import mockSongsTop200 from "../mocks/songsTop200.json";
import mockArtistsTop50 from "../mocks/artistsTop50.json"
import { getSearchArtist } from "./apiSearch";

export async function getSongsTop200({ countryCode }) {
  const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${countryCode}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ac6d7a52b0mshb4a4780e8bbedefp144c1ajsn00c61502935f",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
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
      "X-RapidAPI-Key": "ac6d7a52b0mshb4a4780e8bbedefp144c1ajsn00c61502935f",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };

  async function SearchArtistsData({ name }) {
    const artistData = await getSearchArtist({name});
    return artistData;
  }

  async function MakeTop50({ result }) {
    const top50 = [];
    for (let index = 0; index < result.length; index++) {
      const name = result[index].artist;
      const artistData = await SearchArtistsData({name});
      result[index].data = artistData;
      
      top50.push(result[index]);
    }

    return top50;
  }

  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
    // const top50 = await MakeTop50({result.slice(0, 3)});
    // console.log(top50);
    // return top50;

    return mockArtistsTop50.slice(0, 3);
  } catch (error) {
    console.log(error);
  }
}
