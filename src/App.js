import { useState } from "react";
import Products from "./components/AllProduct/Products/Products";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/shared/Navbar";

function App() {
  const [homePage, setHomePage] = useState(true);
  const [cartPage, setCartPage] = useState(false);

  return (
    <>
      <Navbar setHomePage={setHomePage} setCartPage={setCartPage} />
      {homePage && <Products />}
      {cartPage && <Cart />}
    </>
  );
}

export default App;
