import React, { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

const Trending = () => {
  let [trendingGames, setTrendingGames] = useState();

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
          setTrendingGames(res.data);
          console.log(trendingGames);
        })
        .catch((err) => console.log(err));
    };

    getGames();
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="container">
        <h1>Trending Releases</h1>
        <div className="row">
          {trendingGames &&
            trendingGames.data.slice(1, 4).map((game) => {
              return (
                <Game key={game.id} name={game.name} img={game.box_art_url} />
              );
            })}
        </div>
        <div className="row">
          <Game
            name={'Madden'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
          <Game
            name={'Sonic'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
          <Game
            name={'Mario'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
