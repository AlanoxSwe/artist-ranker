import React, { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import Artist from './pages/Artist';
import ArtistContext from '../context/artistContext';
import services from '../services';

const App = () => {
  const [artists, setArtists] = useState(services.artist.getArtists());
  const [selectedArtistId, setSelectedArtistId] = useState(
    services.artist.selectedArtistId()
  );

  useEffect(() => {
    localStorage.setItem('artists', JSON.stringify(artists));
  }, [artists]);

  useEffect(() => {
    localStorage.setItem('selectedArtistId', JSON.stringify(selectedArtistId));
  }, [selectedArtistId]);

  return (
    <BrowserRouter>
      <ArtistContext.Provider
        value={{ artists, setArtists, selectedArtistId, setSelectedArtistId }}
      >
        <Switch>
          <Route path="/artist/:id" render={props => <Artist {...props} />} />
          <Route path="/" render={props => <HomePage {...props} />} />
        </Switch>
      </ArtistContext.Provider>
    </BrowserRouter>
  );
};

export default App;
