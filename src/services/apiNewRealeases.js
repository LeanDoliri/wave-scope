import mock from "../../newRealeasTemplate.json"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ac6d7a52b0mshb4a4780e8bbedefp144c1ajsn00c61502935f",
    "X-RapidAPI-Host": "spotify117.p.rapidapi.com",
  },
};

export async function getNewRealeases({ countryCode }) {
  const url = `https://spotify117.p.rapidapi.com/new_releases/?country=${"AR"}`;

  try {
    // const response = await fetch(url, options);
    // const result = await response.json();
    // const { albums } = result;
    // const { items } = albums;
    // return items;
    const { albums } = mock;
    const { items } = albums;
    return items;
  } catch (error) {
    return error;
  }
}
