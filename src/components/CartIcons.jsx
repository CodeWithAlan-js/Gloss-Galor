import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "animate.css";

const CartIcon = () => {
  const { cartCount, addAnimation } = useCartContext();

  return (
    <div>
      <Link to={"cart-page"}>
        <button
          className={`mr-5 md:mr-16 border border-pink-100 rounded-full h-12 w-12 flex justify-center items-center hover:scale-125 duration-150 hover:origin-center hover:rotate-45 ${
            addAnimation ? "animate__animated animate__bounceIn" : ""
          }`}
        >
          <p>{cartCount}</p>
          <IoCartOutline size={30} />
        </button>
      </Link>
    </div>
  );
};

export default CartIcon;
