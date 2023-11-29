import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('jack@example.com');
  const [password, setPassword] = useState('qwerty');

  // const loginHandler = (e) => {
  //   e.preventDefault();
  //   sessionStorage.setItem('isLoggedIn', true);
  // }

  return (
    <>
      <NavigationBar />
      <main className={styles.login}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div>
            <button>Login</button>
          </div>
        </form>
      </main>
    </>
  );
}
