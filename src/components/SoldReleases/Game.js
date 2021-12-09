import React from 'react';

const Game = ({ name, img }) => {
  const imgTo1080p = (img) => {
    const width = img.replace('{width}', '500');
    const height = width.replace('{height}', '500');
    return height;
  };

  return (
    <div className="card bg-transparent col">
      <img src={imgTo1080p(img)} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Game;
