import { navItems } from "../constants/const";
import '../styles//Header.css';

const Nav: React.FC = () => {
  return (
    <header className="nav-header">
      <nav className="nav-container">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className="nav-link">
                <img src={`/src/assets/${item.icon}.png`} alt={item.label} className="nav-icon"/>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
