import { useParams } from "react-router-dom";
import foodData from "./foodData";

const FoodDetails = () => {
  const { id } = useParams();
  const foodItem = foodData.find((item) => item.id === Number(id));

  if (!foodItem) {
    return <h2>Food item not found</h2>;
  }

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some((item) => item.id === foodItem.id)) {
      favorites.push(foodItem);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <div>
      <h2>{foodItem.name}</h2>
      <img src={foodItem.image} alt={foodItem.name} width={200} />
      <p>{foodItem.description}</p>
      <p>Price: ₹{foodItem.price}</p>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default FoodDetails;
