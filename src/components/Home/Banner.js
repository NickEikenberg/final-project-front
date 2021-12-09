import { useState, useEffect } from 'react';
import BannerMainGame from './BannerMainGame';
import BannerGame from './BannerGame';

const Banner = () => {
  // let [mainGame, setMainGame] = useState({
  //   name: '',
  //   summary: '',
  //   cover: { url: '' },
  // });

  // useEffect(() => {
  //   const axios = require('axios');
  //   let data =
  //     'fields name, summary, cover.url;\nwhere name = "Metal Gear Solid";\n';

  //   let config = {
  //     method: 'post',
  //     url: 'https://peaceful-tor-54406.herokuapp.com/https://api.igdb.com/v4/games/',
  //     headers: {
  //       'Client-ID': 'dmlu2pmbd2wc14ke1ooh3on7cmnxr9',
  //       Authorization: 'Bearer yrehr7e8zvm73i51nafp0w0c8d74ra',
  //       'Content-Type': 'text/plain',
  //     },
  //     data: data,
  //   };

  //   const getGame = async () => {
  //     await axios(config)
  //       .then((response) => {
  //         setMainGame(response.data[0]);
  //         console.log(mainGame);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getGame();
  // }, []);

  return (
    <div className="card-group text-white row">
      <div className="col">
        <BannerMainGame name={'Metal Gear Solid 3: Snake Eater'} />
      </div>

      <div className="card-group text-white col-4 flex-column">
        <BannerGame name={'Portal'} />

        <BannerGame name={'Disco Elysium'} />

        <BannerGame name={'Haunting Ground'} />
      </div>
    </div>
  );
};

export default Banner;
