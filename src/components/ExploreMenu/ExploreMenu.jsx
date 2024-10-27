import { React } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assests/assets";

const ExploreMenu = (props) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore our carefully curated menu and treat yourself to a delightful
        selection of dishes, made to suit every palate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menu_items, index) => {
          return (
            <div
              onClick={() =>
                props.setCategory((prev) =>
                  prev === menu_items.menu_name ? "All" : menu_items.menu_name
                )
              }
              key={index}
              className="explore-menu-list-items"
            >
              <img
                className={
                  props.category === menu_items.menu_name ? "active" : ""
                }
                src={menu_items.menu_image}
                alt=""
              />
              <p>{menu_items.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
