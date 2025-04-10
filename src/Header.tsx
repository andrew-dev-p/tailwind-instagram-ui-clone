import Actions from "./components/Actions";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";

const Header = () => {
  return (
    <div className="z-30 sticky top-0 w-screen h-18 bg-white border-b border-gray-300 shadow-sm">
      <div className="h-full flex justify-between items-center gap-2 mx-4 xl:max-w-6xl xl:mx-auto">
        <Logo />
        <SearchBar />
        <Actions />
      </div>
    </div>
  );
};

export default Header;
