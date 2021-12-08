import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Trending from '../src/components/Trending/Trending';
import Sold from '../src/components/SoldReleases/Sold';

const index = () => {
  return (
    <>
      <Header />
      <Home />
      <Trending />
      <Sold />
    </>
  );
};

export default index;
