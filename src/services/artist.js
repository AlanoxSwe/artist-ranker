const find = (artists, id) => {
  const artist = artists.find(artist => id === artist.id);
  const index = artists.indexOf(artist);

  return {
    artist,
    index,
  };
};

const getArtists = () => {
  const localArtists = JSON.parse(localStorage.getItem('artists'));
  return localArtists ? localArtists : [];
};

const selectedArtistId = () => {
  const localSelectedArtistID = JSON.parse(
    localStorage.getItem('selectedArtistId')
  );
  return localSelectedArtistID ? localSelectedArtistID : null;
};

export default {
  find,
  getArtists,
  selectedArtistId,
};
