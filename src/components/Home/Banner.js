const Banner = () => {
  return (
    <div className="card-group text-white row">
      <div className="card bg-dark col-5">
        <img
          src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
          className="card-img-top"
          alt="Halo 3"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>

      <div className="card-group text-white col-4 flex-column">
        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            class="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="card-text">This is a wider card with supporting</p>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            class="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <p className="card-text">This is a wider card with supporting</p>
          </div>
        </div>

        <div className="card bg-dark text-white">
          <img
            src="https://www.dualshockers.com/static/uploads/2017/09/halo-3.jpg"
            class="card-img"
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
