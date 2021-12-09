import { useState, useEffect } from 'react';

const Banner = () => {
  let [mainGame, setMainGame] = useState({
    name: '',
    summary: '',
    cover: { url: '' },
  });

  useEffect(() => {
    const axios = require('axios');
    let data =
      'fields name, summary, cover.url;\nwhere name = "Haunting Ground";\n';

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
    <div className="card-group text-white row">
      <div className="card bg-dark ">
        <img
          src={mainGame.cover.url.replace('thumb', '1080p')}
          className="card-img-top"
          alt={mainGame.name}
        />

        <div className="card-body">
          <h5 className="card-title">
            {mainGame.name}, the most expensive horror game
          </h5>
          <p className="card-text">{mainGame.summary}</p>
        </div>
      </div>

      <div className="card-group text-white col-4 flex-column">
        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="card-text">This is a wider card with supporting</p>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="card-text">This is a wider card with supporting</p>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="card-text">This is a wider card with supporting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
