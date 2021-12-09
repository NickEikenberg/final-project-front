import Searchbar from './Searchbar';
import Link from 'next/link';

const Header = ({ searchData, setSearchData }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">GameCogs</a>
        </Link>
        <Searchbar searchData={searchData} setSearchData={setSearchData} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Marketplace
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
