import Header from '../src/components/Header/Header';
import Home from '../src/components/Home/Home';
import Trending from '../src/components/Trending/Trending';
import Sold from '../src/components/SoldReleases/Sold';
import NewletterBanner from '../src/components/NewletterBanner/NewletterBanner';
import JustOnSale from '../src/components/JustOnSale/JustOnSale';
import Footer from '../src/components/Footer/Footer';

const index = () => {
  return (
    <div>
      <div className="bg-black">
        <Header />
        <Home />
        <Trending />
      </div>
      <div>
        <Sold />
      </div>
      <div className="bg-black">
        <NewletterBanner />
      </div>
      <div>
        <JustOnSale />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default index;
