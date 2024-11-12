import "boxicons";
import { useState } from "react";
function Header() {
  const [toggle, setToggle] = useState(false);
  const [navStyle, setNavStyle] = useState("hidden");
  const navSweep = () => {
    if (!toggle) {
      setNavStyle("fixed top-[60px] left-0 bg-[#222222] flex flex-col w-full");
      setToggle(!toggle);
    } else {
      setNavStyle("hidden");
      setToggle(!toggle);
    }
  };
  return (
    <header className="  flex px-5 py-4 justify-between bg-[#222222] text-white md:px-8">
      <a href="#" className="text-xl font-bold uppercase">
        itopup
      </a>
      <div className="flex gap-4">
        <div className="flex justify-center items-center">
          <box-icon type="solid" name="cart-alt" color="white"></box-icon>
        </div>
        <div
          className="flex items-center cursor-pointer md:hidden"
          id="menu"
          onClick={navSweep}
        >
          <box-icon name="menu" color="white"></box-icon> Menu
        </div>
        <nav className="max-md:hidden flex gap-4">
          <a href="#" className="font-medium hover:text-[#afa8a8]">Games</a>
          <a href="#" className="font-medium hover:text-[#afa8a8]">Accessories</a>
          <a href="#" className="font-medium hover:text-[#afa8a8]">Blogs</a>
          <a href="#" className="font-medium hover:text-[#afa8a8]">Login|Register</a>
          <a href="#" className="font-medium hover:text-[#afa8a8]">Order Tracker</a>
        </nav>
      </div>
      <div className={navStyle}>
        <a href="#" className="px-5 py-3 hover:text-[#afa8a8]">
          Games
        </a>
        <a href="#" className="px-5 py-3 hover:text-[#afa8a8]">
          Accessories
        </a>
        <a href="#" className="px-5 py-3 hover:text-[#afa8a8]">
          Blogs
        </a>
        <a href="#" className="px-5 py-3 hover:text-[#afa8a8]">
          Login | Register
        </a>
        <a href="#" className="px-5 py-3 hover:text-[#afa8a8]">
          Order Tracker
        </a>
      </div>
    </header>
  );
}

export default Header;
