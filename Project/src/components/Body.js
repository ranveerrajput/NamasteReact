import { useState } from "react";
import { restrauntList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchInput, restaurants) {
  const filtetrData = restaurants.filter((restaurant) =>
    restaurant.data.data.name.includes(searchInput)
  );
  return filtetrData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restrauntList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
