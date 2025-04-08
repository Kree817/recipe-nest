import RecipeCard from "./recipe-card"; // Import RecipeCard component
import "../styles/recipe-section.css"; // Import the updated CSS for the Recipe Section

const RecipeSection = () => {
  // Hypothetical recipe data, using images from the 'public' folder
  const recipes = [
    { id: 1, image: "/assets/images/login-bg.jpg", title: "Sauteed Veggies", reviews: 500 },
    { id: 2, image: "/assets/images/login-bg.jpg", title: "Pancake", reviews: 250 },
    { id: 3, image: "/assets/images/login-bg.jpg", title: "Boba Drinks", reviews: 300 },
    { id: 4, image: "/assets/images/login-bg.jpg", title: "Healthy Bowl", reviews: 150 },
    { id: 5, image: "/assets/images/login-bg.jpg", title: "Tacos", reviews: 400 },
    { id: 6, image: "/assets/images/login-bg.jpg", title: "Ice Cream", reviews: 350 },
  ];

  return (
    <div className="recipe-section">
      <h2 className="section-title">Top Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            reviews={recipe.reviews}
          />
        ))}
      </div>
      <div className="view-all-recipes">
        <a href="/recipes" className="view-all-btn">View All Recipes</a>
      </div>
    </div>
  );
};

export default RecipeSection;
