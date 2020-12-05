import React, { useState, useContext } from 'react';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import ArtistContext from '../../context/artistContext';
import { v4 as uuid } from 'uuid';

const Form = () => {
  const { artists, setArtists } = useContext(ArtistContext);
  const [nameValue, setNameValue] = useState('');

  const onChange = e => setNameValue(e.currentTarget.value);

  const handleOnSubmit = e => {
    e.preventDefault();
    const artist = {
      id: uuid(),
      name: nameValue,
      image: 'https://via.placeholder.com/70',
      rating: 1,
    };
    setArtists([...artists, artist]);
    setNameValue('');
  };

  return (
    <form>
      <Input
        label="Artist Name"
        name="artist-name"
        value={nameValue}
        onChange={e => onChange(e)}
      />
      <Button
        label="Add Artist"
        type="submit"
        onClick={e => handleOnSubmit(e)}
      />
    </form>
  );
};

export default Form;
