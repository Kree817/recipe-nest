import "../styles/footer.css"; // CSS for footer

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2025 RecipeNest. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
