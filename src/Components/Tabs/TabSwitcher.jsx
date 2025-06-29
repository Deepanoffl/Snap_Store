import { ProductContext } from "../../Context/ProductDataProvider";
import { TabContext } from "../../Context/TabActiveProvider";
import { RefreshKeyContext } from "../../Context/RefreshKeyProvider";
import { useContext } from "react";
const TabSwitcher = ({ tab }) => {
  const { copiedProducts, setSmartFilter } = useContext(ProductContext);
  const { tabActive, setTabActive } = useContext(TabContext);
  const { setRefreshKey } = useContext(RefreshKeyContext);

  const handleFilter = (selectedTab) => {
    window.scrollTo({ top: 300, behavior: "smooth" });

    setTabActive(selectedTab);

    let filteredProduct = [];

    if (selectedTab === "All") {
      filteredProduct = copiedProducts;

      setSmartFilter(filteredProduct);
    } else if (selectedTab === "Popular") {
      filteredProduct = copiedProducts.filter((p) => p?.popular);

      setSmartFilter(filteredProduct);
    } else if (selectedTab === "Cheap") {
      filteredProduct = copiedProducts.filter((p) => p.price <= 200);

      setSmartFilter(filteredProduct);
    } else if (selectedTab === "Expensive") {
      filteredProduct = copiedProducts.filter((p) => p.price >= 400);

      setSmartFilter(filteredProduct);
    } else if (selectedTab === "Sale") {
      filteredProduct = copiedProducts.filter((p) => p?.onSale);

      setSmartFilter(filteredProduct);
    }
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <li>
      <a
        className={`relative cursor-pointer transition-all duration-500 rounded-full ${
          tabActive === tab ? "py-1 px-1" : "px-2 py-0"
        }`}
        onClick={() => handleFilter(tab)}
      >
        <span
          className={`absolute -top-[2px] -bottom-[2px] -left-2 -right-2 bg-zinc-700 dark:bg-zinc-900 rounded-full transition-all duration-500 transform ${
            tabActive === tab ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        ></span>
        <span
          className={`relative transition-colors duration-500 text-zinc-500 dark:text-zinc-100 ${
            tabActive === tab
              ? "text-white"
              : "text-zinc-500 dark:text-zinc-300"
          }`}
        >
          {tab}
        </span>
      </a>
    </li>
  );
};

export default TabSwitcher;
