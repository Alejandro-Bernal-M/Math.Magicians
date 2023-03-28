import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'Calculator', text: 'Calculator' },
    { path: 'Quote', text: 'Quote' },
  ];

  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1Nav}>Math Magicians</h1>
      <ul>
        {links.map((item) => (
          <li key={item.text}>
            <NavLink to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
