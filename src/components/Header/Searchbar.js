import axios from 'axios';
import { useState } from 'react';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  const showSearch = (e) => {
    setSearch(e.target.value);

    console.log(search);
  };

  const searchForGame = (event) => {
    event.preventDefault();

    axios({
      url: `https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games/?search=${search}&fields=id,name,summary`,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: process.env.IGDB_AUTH_TOKEN,
      },
      data: 'fields name;',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
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
