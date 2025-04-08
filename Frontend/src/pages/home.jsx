import "../styles/home.css"; // Importing CSS styles for the home page
import Navbar from "../components/navbar";
import Hero from "../components/hero-section";
import RecipeSection from "../components/recipe-section"; // Showing Top Recipes
import Footer from "../components/footer";
import ChefsSection from "../components/chef-section";


const Home = () => {
  return (
    <>
      <Navbar /> {/* Navigation bar */}
      <Hero /> {/* Hero section */}
      <RecipeSection /> {/* Top recipes */}
      <ChefsSection /> {/* Featured chefs section */}
      <Footer /> {/* Footer for extra information */}
    </>
  );
};

export default Home;
