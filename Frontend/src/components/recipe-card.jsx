import PropTypes from "prop-types"; // PropTypes for validation
import { FaHeart } from "react-icons/fa"; // Heart icon for the like button
import { Link } from "react-router-dom";

const RecipeCard = ({ id, image, title, reviews }) => {
  return (
    <div className="recipe-card">
      <div className="image-container">
        <img src={image} alt={title} className="recipe-image" />
        <button className="like-button">
          <FaHeart />
        </button>
      </div>
      <h3 className="recipe-title">{title}</h3>
      <p className="recipe-reviews">{reviews} reviews</p>
      <Link to={`/recipe/${id}`} className="view-recipe-btn">
        View Recipe
      </Link>
    </div>
  );
};

// PropTypes for validation
RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reviews: PropTypes.number.isRequired,
};

export default RecipeCard;
