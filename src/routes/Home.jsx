import styles from '../styles/home.module.css';

const Home = () => (
  <div className={styles.homeDiv}>
    <h2 className={styles.h2Home}>Welcome to our page.</h2>
    <p>
      This web application was created during the third module of
      the web full stack program in microverse,
      it was created using React by Alejandro Bernal.
    </p>
    <br />
    <br />
    <p>
      The app consists of three pages, you are in this moment on the home page,
      where you can see this information, there is a page where you can use
      the calculator, and the last one, where you can see an awesome quote.

    </p>
  </div>
);

export default Home;
