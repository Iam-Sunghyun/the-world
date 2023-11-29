import NavigationBar from '../components/NavigationBar';
import styles from './Product.module.css';

export default function Product() {
  return (
    <>
      <NavigationBar />
      <main className={styles.product}>
        <section>
          <div>
            <h2>
              가격 정책
              <br />
              $9/월
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia
              iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
            </p>
          </div>
          <img src='img-2.jpg' alt='overview of a large city with skyscrapers' />
        </section>
      </main>
    </>
  );
}
