import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Foods/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true);
  };
  const closeCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
