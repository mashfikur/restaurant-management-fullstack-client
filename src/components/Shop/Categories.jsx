import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuData from "../../hooks/useMenuData";
import TabCards from "./TabCards";

const Categories = () => {
  const [menu] = useMenuData();
  const items = ["salad", "pizza", "soups", "desserts", "drinks"];
  const [tabIndex, setTabIndex] = useState(0);

  //   filtering menu items based on categories
  const salad = menu.filter((data) => data.category === "salad");
  const pizza = menu.filter((data) => data.category === "pizza");
  const soups = menu.filter((data) => data.category === "soup");
  const desserts = menu.filter((data) => data.category === "dessert");
  const drinks = menu.filter((data) => data.category === "drinks");

  const categories = [salad, pizza, soups, desserts, drinks];

  return (
    <div className="mt-32 max-w-7xl mx-auto">
      <Tabs
        selectedTabClassName="active-tab  "
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={" mb-12 flex gap-12  items-center justify-center"}>
          {items.map((item, idx) => (
            <Tab
              className={
                "cursor-pointer border-b-4 font-semibold border-b-transparent "
              }
              key={idx}
            >
              {" "}
              {item.toUpperCase()}{" "}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, idx) => (
          <TabPanel key={idx}>
            <TabCards items={category}></TabCards>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Categories;
