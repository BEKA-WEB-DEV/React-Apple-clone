import React from "react";
import { Route, Routes } from "react-router-dom";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Main from "./components/Main/Main";
import Mac from "./Pages/Mac/Mac";
import Ipad from "./Pages/Ipad/Ipad";
import Iphone from "./Pages/Iphone/Iphone";
import Watch from "./Pages/Watch/Watch";
import TV from "./Pages/TV/TV";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Cart from "./Pages/Cart/Cart";
import Four04 from "./Pages/Four04/Four04";
import SharedLayout from "./components/SharedLayout/SharedLayout";

// import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleAppleProduct from "./Pages/Iphone/SingleAppleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="Mac" element={<Mac />} />
          <Route path="Iphone/" element={<Iphone />} />
          {/* <Route path="Iphone/:id" element={<ProductPage />} /> */}
          <Route path="Iphone/:id" element={<SingleAppleProduct />} />
          <Route path="Ipad" element={<Ipad />} />
          <Route path="Watch" element={<Watch />} />
          <Route path="TV" element={<TV />} />
          <Route path="Music" element={<Music />} />
          <Route path="Support" element={<Support />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
