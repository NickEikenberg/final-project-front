import React from 'react';

const Game = ({ name, img }) => {
  return (
    <div className="card bg-transparent col">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
};

export default Game;
