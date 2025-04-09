import instagram from "../assets/instagram.svg";
import instagramText from "../assets/instagramText.svg";

const Logo = () => {
  return (
    <>
      <div className="shrink-0 cursor-pointer w-24 hidden lg:inline-grid">
        <img src={instagramText} alt="Instagram logo" />
      </div>
      <div className="shrink-0 cursor-pointer w-10 inline-grid lg:hidden">
        <img src={instagram} alt="Instagram logo" />
      </div>
    </>
  );
};

export default Logo;
