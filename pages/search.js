import Header from '../src/components/Header/Header';
import { useState, useEffect } from 'react';

const Search = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

  return (
    <div>
      <Header searchData={searchData} setSearchData={setSearchData} />
      {searchData.map((game, index) => {
        return <h1 key={index}>Game Title: {game.name}</h1>;
      })}
    </div>
  );
};

export default Search;
