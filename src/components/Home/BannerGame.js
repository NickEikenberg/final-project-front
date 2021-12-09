import { useState, useEffect } from 'react';
import axios from 'axios';

const BannerGame = ({ name }) => {
  let [mainGame, setMainGame] = useState({
    name: '',
    summary: '',
    cover: { url: '' },
  });

  useEffect(() => {
    let data = `fields name, summary, cover.url;\nwhere name = "${name}";\n`;

    let config = {
      method: 'post',
      url: 'https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games/',
      headers: {
        'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
        Authorization: 'Bearer yrehr7e8zvm73i51nafp0w0c8d74ra',
        'Content-Type': 'text/plain',
      },
      data: data,
    };

    const getGame = async () => {
      await axios(config)
        .then((response) => {
          setMainGame(response.data[0]);
          console.log(mainGame);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getGame();
  }, []);

  return (
    <div>
      <div className="card bg-dark ">
        <img
          src={mainGame.cover.url.replace('thumb', '1080p')}
          className="card-img-top"
          alt={mainGame.name}
        />

        <div className="card-body">
          <h5 className="card-title">Recently Sold: {mainGame.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default BannerGame;
