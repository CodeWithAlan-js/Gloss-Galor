import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcons";

const NavBar = () => {
  return (
    <nav className="sticky top-0 flex justify-between items-center border-b-2 border-[#457B9D] bg-white z-10">
      <Link to={"/"}>
        <img
          className="w-1/4 ml-5 mt-2 mb-2 md:w-44 md:ml-16"
          src={logo}
          alt="logo"
        />
      </Link>
      <CartIcon />
    </nav>
  );
};

export default NavBar;
