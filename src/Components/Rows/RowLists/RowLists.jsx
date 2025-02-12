import React from 'react'
import Row from '../Row/Row'
import requests from "../../../Utils/requests"

function RowLists() {
  return (
    <div style={{backgroundColor: "#111",
      padding: 0,
      margin: 0}}>
        <Row tittle="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow= {true} />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="TV shows" fetchUrl={requests.fetchTvShow} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default RowLists