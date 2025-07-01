import BannerDesktop from "../assets/images/banner-desktop2.webp";
import BannerMobile from "../assets/images/banner-mobile.webp";

import "../styles/Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img
          src={BannerDesktop}
          alt="banner desktop"
          className="banner-desktop"
        />
        <img src={BannerMobile} alt="banner mobile" className="banner-mobile" />
      </div>
    </div>
  );
};

export default Banner;
