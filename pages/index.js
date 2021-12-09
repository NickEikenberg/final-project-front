import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Trending from '../src/components/Trending/Trending';
import Sold from '../src/components/SoldReleases/Sold';

const index = () => {
  return (
    <div>
      <div className="bg-black">
        <Header />
        <Home />
        <Trending />
      </div>
      <Sold />
    </div>
  );
};

export default index;
