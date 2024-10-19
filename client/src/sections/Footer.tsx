import { navItems } from "../constants/const";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="nav-link">
                <img src={`/src/assets/${item.icon}.png`} alt={item.label} className="nav-icon"/>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p>&copy; {new Date().getFullYear()} Цирюльник. Усі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;