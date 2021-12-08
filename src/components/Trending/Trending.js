import React from 'react';
import Game from './Game';

const Trending = () => {
  return (
    <div className="bg-black text-white">
      <div className="container">
        <h1>Trending Releases</h1>
        <div className="row">
          <Game
            name={'Halo 3'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
          <Game
            name={'Metal Gear'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
          <Game
            name={'Silent Hill'}
            img={
              'https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg'
            }
          />
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
