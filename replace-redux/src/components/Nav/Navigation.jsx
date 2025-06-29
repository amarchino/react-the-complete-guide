import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={classes.mainHeader}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
