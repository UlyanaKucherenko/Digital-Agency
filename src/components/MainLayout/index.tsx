import Home from '~/pages/Home';
import styles from './index.module.css';
import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Sidebar />
      <main>
        <Home />
      </main>
    </div>
  );
};

export default MainLayout;
