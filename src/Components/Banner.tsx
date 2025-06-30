import banner from "../assets/images/banner-desktop.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
