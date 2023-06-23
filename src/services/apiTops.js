const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac6d7a52b0mshb4a4780e8bbedefp144c1ajsn00c61502935f",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  },
};

export async function getTop200({ country } = { country: "GLOBAL" }) {
  const url = `https://spotify81.p.rapidapi.com/top_200_tracks?country=${country}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
