import NavBar from "../components/NavBar";
import { useCartContext } from "../context/CartContext";
import QuantitySelector from "../components/QuantitySelector";
import { Button } from "@material-tailwind/react";

const CartPage = () => {
  const { cartItems, calculateTotal } = useCartContext();

  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex-grow">
          {cartItems.length === 0 ? (
            <p className="text-2xl h-full mt-10">Votre panier est vide</p>
          ) : (
            <>
              <h1 className="text-3xl flex justify-center mt-10 mb-20 ">
                Votre Panier
              </h1>
              <ul className="w-80">
                {cartItems.map((item) => (
                  <li
                    key={item.productId}
                    className="flex  pb-20 mb-20 border-b border-black justify-evenly"
                  >
                    <div className="">
                      <img
                        src={`src/assets/${item.productId}.avif`}
                        alt={`Product: ${item.productId}`}
                        className="w-28 h-28 mr-5"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">
                        {item.productId}
                      </h2>
                      <p>Quantité: {item.quantity}</p>
                      <QuantitySelector
                        productId={item.productId}
                        quantity={item.quantity}
                      />
                      <p className="mb-2">
                        Prix unitaire: {item.productPrice.toFixed(2)} $
                      </p>
                      <p className="mb-2">
                        Total: {(item.quantity * item.productPrice).toFixed(2)}{" "}
                        $
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="sticky w-full bottom-0 bg-white z-10 flex flex-col items-center justify-center py-6 border-t-2 border-[#457B9D]">
          <div className="flex items-center mb-2">
            <h2 className="text-xl mr-2">Total:</h2>
            <p className="text-xl font-bold">{calculateTotal().toFixed(2)} $</p>
          </div>
          <div className="">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none hover:bg-gradient-to-br from-pink-50 to-cyan-50 focus:scale-105 focus:shadow-none active:scale-100 hover:animate-bounce"
            >
              Proceed To Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
