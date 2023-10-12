import { Route, Routes } from 'react-router-dom';

import Home from '~/pages/Home';
import About from '~/pages/About';
import styles from './index.module.css';
import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';
import { Footer } from '~/components/Footer';
import { ErrorPage } from '~/pages/ErrorPage';

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
