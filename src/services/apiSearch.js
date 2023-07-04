export async function getSearchArtist({ name }) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ac6d7a52b0mshb4a4780e8bbedefp144c1ajsn00c61502935f",
      "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
    },
  };
  
  const url = `https://spotify81.p.rapidapi.com/search?q=${name}&type=artists&offset=0&limit=1&numberOfTopResults=5`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const artistData = result.artists.items[0];
    return artistData.data;
  } catch (error) {
    return error;
  }
}
