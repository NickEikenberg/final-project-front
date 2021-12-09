import React from 'react';

const NewletterBanner = () => {
  return (
    <div className="text-white container py-4 flex-row">
      <div>
        Join GameCogs Newsletters - Keep up with new releases, articles, and
        more!
      </div>
      <div>
        <input
          className="form-control"
          type="email"
          placeholder="Email"
        ></input>
      </div>
    </div>
  );
};

export default NewletterBanner;
