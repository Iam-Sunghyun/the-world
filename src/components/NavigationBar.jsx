import { NavLink } from 'react-router-dom';
import test from './test.module.css';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
