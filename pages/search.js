import Header from '../src/components/Header/Header';
import { useState, useEffect } from 'react';

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const [games, setGames] = useState();

  // const createGames = () => {

  // }

  const thumbTo1080 = (url) => url.replace('thumb', '1080p');

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <div>
      <Header searchData={searchData} setSearchData={setSearchData} />
      <div className="container d-flex flex-wrap">
        {searchData.length > 0
          ? searchData.map((game, index) => {
              return (
                <div className="card w-25" key={index}>
                  <img
                    src={thumbTo1080(game.cover.url)}
                    alt={game.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="card-title">{game.name}</div>
                    <p className="card-text"></p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Search;
