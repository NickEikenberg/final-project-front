import axios from 'axios';
import Header from '../src/components/Header/Header';

const search = () => {
  const searchForHalo = () => {
    axios({
      url: 'https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
        Authorization: 'Bearer h0635u8hgip4x6su7k8r8p98lmchsp',
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

export default search;
