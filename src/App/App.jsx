import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrimaryLayout from "../Components/CoreLayout/PrimaryLayout";
import Navbar from "../Components/Navigation/Navbar";
import CartModal from "../Components/EasyCart/CartModal";
import ProductDataProvider from "../Context/ProductDataProvider";
import RefreshKeyProvider from "../Context/RefreshKeyProvider";
import ProductModalProvider from "../Context/ProductModalProvider";
import TabActiveProvider from "../Context/TabActiveProvider";
import CategoryProvider from "../Context/CategoryProvider";
import SearchProvider from "../Context/SearchProvider";
import CartProvider from "../Context/CartProvider";

const App = () => {
  return (
    <>
      <ProductDataProvider>
        <RefreshKeyProvider>
          <ProductModalProvider>
            <TabActiveProvider>
              <CategoryProvider>
                <SearchProvider>
                  <CartProvider>
                    <BrowserRouter>
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<PrimaryLayout />}></Route>
                        <Route path="/cart" element={<CartModal />}></Route>
                      </Routes>
                    </BrowserRouter>
                  </CartProvider>
                </SearchProvider>
              </CategoryProvider>
            </TabActiveProvider>
          </ProductModalProvider>
        </RefreshKeyProvider>
      </ProductDataProvider>
    </>
  );
};

export default App;
