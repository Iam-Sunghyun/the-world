import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import styles from './SideBar.module.css';

function SideBar() {
  return (
    <div className={ styles.sidebar }>
      <Logo />
      <AppNav />
      <p>도시 리스트</p>

      <Footer />
    </div>
  );
}

export default SideBar;
