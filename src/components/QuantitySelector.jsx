import React from "react";
import { useCartContext } from "../context/CartContext";

const QuantitySelector = ({ productId, quantity }) => {
  const { addToCart, removeFromCart } = useCartContext();

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);

    // Vérifiez si la nouvelle quantité est supérieure à zéro
    if (newQuantity > 0) {
      if (!isNaN(newQuantity)) {
        if (newQuantity > quantity) {
          addToCart(productId, newQuantity - quantity);
        } else {
          removeFromCart(productId, quantity - newQuantity);
        }
      }
    } else {
      // Si la nouvelle quantité est zéro ou négative, retirez l'article
      removeFromCart(productId, quantity);
    }
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-14 h-8 border p-2 border-gray-300 rounded mb-2"
      />
    </div>
  );
};

export default QuantitySelector;
