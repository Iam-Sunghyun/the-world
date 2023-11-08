import { NavLink } from 'react-router-dom';
import style from './NavigationBar.module.css';

// const isActive = ({ isActive, isPending, isTransitioning }) => {
//   return {
//     fontWeight: isActive ? 'bold' : '',
//     color: isPending ? 'red' : 'black',
//     viewTransitionName: isTransitioning ? 'slide' : '',
//   };
// };

function NavigationBar() {
  return (
    <nav className={style.nav}>
      <div className={style['nav-icon-container']}>
        <img className={style['nav-icon']} src='public\free-icon-earth-globe-1719481.png' alt='' />
        <NavLink to='/' className={style['nav-home-text']}>The World</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to='/products'>PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>PRICING</NavLink>
        </li>
        <li>
          <NavLink to='/products'>LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
