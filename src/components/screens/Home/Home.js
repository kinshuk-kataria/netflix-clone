import React from 'react';
import requests from '../../../api/Requests';
import Banner from '../../Banner/Banner';
import Nav from '../../Nav/Nav';
import Row from '../../Row/Row';
import './home.css';

function Home() {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="home__row">
        {' '}
        <Row
          title={'Trending'}
          fetchUrl={requests.fetchTrending}
          isLargeRow="true"
        />
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
        <Row title={'Action'} fetchUrl={requests.fetchActionMovies} />
        <Row title={'Comedy '} fetchUrl={requests.fetchComedyMovies} />
        <Row title={'Horror'} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={'Romance'} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default Home;
