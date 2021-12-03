import axios from 'axios';
import { useState } from 'react';

const Searchbar = ({ searchData, setSearchData }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const showSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchForGame = (event) => {
    event.preventDefault();

    axios({
      url: `https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games/?search=${searchQuery}&fields=name`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: process.env.IGDB_AUTH_TOKEN,
      },
      data: 'fields name;',
    })
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for a game"
        aria-label="Search"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          searchForGame(e);
        }}
        list="datalistOptions"
        id="datalist"
      />
      <datalist id="datalistOptions">
        {searchData.map((game, index) => {
          return (
            <>
              <option value={game.name} key={index} />
            </>
          );
        })}
      </datalist>
      <button
        className="btn btn-outline-success"
        type="submit"
        onClick={searchForGame}
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
