import React from "react";
import TabSwitcher from "./TabSwitcher";

const QuickSortTabs = () => {
  const tabs = ["All", "Popular", "Cheap", "Expensive", "Sale"];
  return (
    <div>
      <ul className="flex gap-4 max-[578px]:gap-y-6 max-[578px]:gap-2 md:mt-8 mt-4 mb-2 flex-wrap text-sm font-bold px-2">
        {tabs.map((tab) => (
          <TabSwitcher tab={tab} key={tab} />
        ))}
      </ul>
    </div>
  );
};


export default React.memo(QuickSortTabs);
