import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import style from './NavigationBar.module.css';

// const isActive = ({ isActive, isPending, isTransitioning }) => {
//   return {
//     fontWeight: isActive ? 'bold' : '',
//     color: isPending ? 'red' : 'black',
//     viewTransitionName: isTransitioning ? 'slide' : '',
//   };
// };

function NavigationBar() {
  // const isLoggdedIn = (e) => {
  //   if (sessionStorage.getItem('email') && sessionStorage.getItem('password')) {
  //     return <NavLink to='/login'>LOGIN</NavLink>;
  //   } else {
  //     return <NavLink to='/login'>LOGIN</NavLink>;
  //   }
  // };
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to='/products'>PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>PRICING</NavLink>
        </li>
        <li>
          <NavLink to={`${sessionStorage.getItem('isLoggedIn') ? '/app' : '/login'}`}>LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
