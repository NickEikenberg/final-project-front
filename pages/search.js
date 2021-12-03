import axios from 'axios';
import Header from '../src/components/Header/Header';

const Search = () => {
  const searchForHalo = () => {
    axios({
      url: 'https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': process.env.IGDB_CLIENT_ID,
        Authorization: process.env.IGDB_AUTH_TOKEN,
      },
      data: 'fields name',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <h1>This is the search page</h1>
      <button onClick={searchForHalo}>SEARCH</button>
    </div>
  );
};

export default Search;
