import React, { useContext } from 'react';
import ArtistContext from '../../context/artistContext';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Table = () => {
  const { artists, setArtists, setSelectedArtistId } = useContext(
    ArtistContext
  );

  const sortedArtist = artists.sort((a, b) => b.rating - a.rating);

  const findArtist = (artists, id) => {
    const artist = artists.find(artist => id === artist.id);
    const index = artists.indexOf(artist);

    return {
      artist,
      index,
    };
  };

  const handleOnIncrement = id => {
    const { artist, index } = findArtist(artists, id);

    const modifiedArtist = {
      ...artist,
      rating: artist.rating + 1,
    };

    setArtists([
      ...artists.slice(0, index),
      modifiedArtist,
      ...artists.slice(index + 1),
    ]);
  };

  const hanldeOnDecrement = id => {
    const { artist, index } = findArtist(artists, id);

    const modifiedArtist = {
      ...artist,
      rating: artist.rating - 1,
    };

    setArtists([
      ...artists.slice(0, index),
      modifiedArtist,
      ...artists.slice(index + 1),
    ]);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Artist</th>
          <th scope="col">Rating</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {sortedArtist.map(artist => (
          <tr key={artist.id}>
            <td>
              <img alt={artist.name} src={artist.image} />
            </td>
            <td onClick={() => setSelectedArtistId(artist.id)}>
              <Link to={`/artist/${artist.name.toLowerCase()}`}>
                {artist.name}
              </Link>
            </td>
            <td>{artist.rating}</td>
            <td>
              <div className="btn-group" role="group">
                <Button
                  label="+"
                  className="btn btn-dark"
                  onClick={() => handleOnIncrement(artist.id)}
                />
                <Button
                  label="-"
                  className="btn btn-danger"
                  onClick={() => hanldeOnDecrement(artist.id)}
                  disabled={artist.rating === 1}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
