import { Link } from 'react-router-dom';
import style from './Logo.module.css';

function Logo() {
  return (
    <div className={style['home-icon-container']}>
      <Link to='/' className={style['home-text']}>
        <img className={style['home-icon']} src='/free-icon-earth-globe-1719481.png' alt='' />
        The World
      </Link>
    </div>
  );
}

export default Logo;
