export async function getLocation({ latitude, longitude }) {
  const geoApiURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

  try {
    const response = await fetch(geoApiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
