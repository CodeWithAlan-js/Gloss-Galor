import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [addAnimation, setAddAnimation] = useState(false);
  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage());

  const addToCart = (productId, productPrice) => {
    const existingItem = cartItems.find((item) => item.productId === productId);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { productId, quantity: 1, productPrice },
      ]);
    }
  };
  const handleCartCount = () => {
    if (cartItems.length > 0) {
      const totalQuantity = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      setCartCount(totalQuantity);
    } else {
      setCartCount(0);
    }
  };

  useEffect(() => {
    handleCartCount();
    saveCartToLocalStorage(cartItems);
  }, [cartItems, handleCartCount]);

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleAnimation = () => {
    setAddAnimation(true);
    setTimeout(() => {
      setAddAnimation(false);
    }, 1000);
  };

  const calculateTotal = () => {
    let total = 0;

    cartItems.forEach((item) => {
      total += item.quantity * item.productPrice;
    });

    return total;
  };

  function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  }

  function saveCartToLocalStorage(cart) {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  return (
    <CartContext.Provider
      value={{
        handleCartCount,
        cartCount,
        handleAnimation,
        addAnimation,
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
