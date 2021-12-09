import { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

const JustOnSale = () => {
  let [justOnSaleGames, setJustOnSaleGames] = useState();

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.twitch.tv/helix/games/top?limit=6',
      headers: {
        accept: 'application/json',
        'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
        Authorization: 'Bearer yrehr7e8zvm73i51nafp0w0c8d74ra',
      },
    };

    const getGames = async () => {
      await axios(config)
        .then((res) => {
          setJustOnSaleGames(res.data);
          console.log(justOnSaleGames);
        })
        .catch((err) => console.log(err));
    };

    getGames();
  }, []);

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <h1>Games Recently Put On Sale</h1>
          <div className="row">
            {justOnSaleGames &&
              justOnSaleGames.data.slice(1, 4).map((game) => {
                return (
                  <Game key={game.id} name={game.name} img={game.box_art_url} />
                );
              })}
          </div>
          <div className="row">
            {justOnSaleGames &&
              justOnSaleGames.data.slice(5, 8).map((game) => {
                return (
                  <Game key={game.id} name={game.name} img={game.box_art_url} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustOnSale;
