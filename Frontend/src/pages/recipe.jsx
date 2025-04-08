import { useParams } from "react-router-dom"; // For getting the recipe ID from the URL

const RecipePage = () => {
  const { id } = useParams();  // Get the recipe ID from the URL (e.g., /recipe/:id)

  // Mock data for recipe details
  const recipe = {
    id,
    image: '/path/to/image.jpg',
    title: "Pancakes",
    description: "Delicious fluffy pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Butter"],
    instructions: "Mix all ingredients and cook on a hot griddle.",
    reviews: "500 reviews"
  };

  return (
    <div className="recipe-page">
      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <h2>{recipe.title}</h2>
        <p>{recipe.reviews}</p>
      </div>

      <div className="recipe-details">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipePage;
