import React, { useContext, useState } from 'react';
import ArtistContext from '../../context/artistContext';
import services from '../../services';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const ArtistPage = ({ history }) => {
  const { artists, setArtists, selectedArtistId } = useContext(ArtistContext);
  const { artist, index } = services.artist.find(artists, selectedArtistId);

  const [value, setValue] = useState({
    name: artist.name,
    image: artist.image,
  });

  const handleOnChange = e => {
    setValue({ ...value, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleOnEdit = e => {
    e.preventDefault();
    const editedArtist = {
      ...artist,
      ...value,
    };

    setArtists([
      ...artists.slice(0, index),
      editedArtist,
      ...artists.slice(index + 1),
    ]);
    return history.push('/');
  };

  return (
    <div className="container">
      <form>
        <Input
          label="Artist Name"
          name="name"
          value={value.name}
          onChange={e => handleOnChange(e)}
        />
        <Input
          label="Image URL"
          name="image"
          value={value.image}
          onChange={e => handleOnChange(e)}
        />
        <Button
          label="Save"
          type="submit"
          className="btn btn-success mr-3"
          onClick={e => handleOnEdit(e)}
        />
        <Button
          label="Back"
          className="btn btn-danger"
          onClick={() => history.push('/')}
        />
      </form>
    </div>
  );
};

export default ArtistPage;
