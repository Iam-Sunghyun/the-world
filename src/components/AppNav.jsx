import { NavLink } from 'react-router-dom';
import style from './AppNav.module.css';

function AppNav() {
  return (
    <div className={style.nav}>
      <NavLink to='cities'>도시</NavLink>
      <NavLink to='countries'>국가</NavLink>
    </div>
  );
}

export default AppNav;
