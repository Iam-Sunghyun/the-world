import styles from './Homepage.module.css';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

export default function Homepage() {
  return (
    <>
      <NavigationBar />
      <main className={styles.homepage}>
        <section>
          <h1>
            You travel the world.
            <br />
            WorldWise keeps track of your adventures.
          </h1>
          <h2>
            A world map that tracks your footsteps into every city you can think of. Never forget
            your wonderful experiences, and show your friends how you have wandered the world.
          </h2>
          <Link className='cta' to='/app'>
            Start
          </Link>
        </section>
      </main>
    </>
  );
}
