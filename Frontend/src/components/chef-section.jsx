import "../styles/chef-section.css"; // Import CSS for chefs section

const ChefsSection = () => {
  // Hypothetical chefs data
  const chefs = [
    { id: 1, name: "Chef John", image: "https://via.placeholder.com/150?text=Chef+John" },
    { id: 2, name: "Chef Harry", image: "https://via.placeholder.com/150?text=Chef+Harry" },
    { id: 3, name: "Chef Liam", image: "https://via.placeholder.com/150?text=Chef+Liam" },
    { id: 4, name: "Chef Ava", image: "https://via.placeholder.com/150?text=Chef+Ava" },
    { id: 5, name: "Chef Sofia", image: "https://via.placeholder.com/150?text=Chef+Sofia" },
    { id: 6, name: "Chef Emma", image: "https://via.placeholder.com/150?text=Chef+Emma" },
  ];

  return (
    <div className="chefs-section">
      <h2>Featured Chefs</h2>
      <div className="chefs-grid">
        {chefs.map((chef) => (
          <div key={chef.id} className="chef-card">
            <img src={chef.image} alt={chef.name} className="chef-image" />
            <h3 className="chef-name">{chef.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsSection;
