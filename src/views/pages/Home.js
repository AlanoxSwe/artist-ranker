import React from 'react';
import Home from '../../components/Home';

const HomePage = () => {
  return (
    <div className="container">
      <Home.Form />
      <Home.Table />
    </div>
  );
};

export default HomePage;
