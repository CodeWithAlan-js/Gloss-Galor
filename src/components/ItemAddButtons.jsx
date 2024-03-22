import { Button } from "@material-tailwind/react";
import { useCartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";

const ItemAddButtons = ({ productId, productPrice }) => {
  const { handleCartCount, handleAnimation,addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(productId, productPrice);
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={() => {
          handleCartCount();
          handleAnimation();
          handleAddToCart();
        }}
        ripple={false}
        fullWidth={true}
        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-gradient-to-br from-pink-50 to-cyan-50 focus:scale-105 focus:shadow-none active:scale-100"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ItemAddButtons;

