import { TitleSection } from '~/components/common/TitleSection';
import styles from './index.module.scss';
import { Post } from '~/components/common/Blog/Post';

export const Blog = () => {
  return (
    <section className={styles.sectionBlog}>
      <div className={styles.sectionBlog__wrapper}>
        <div className={styles.sectionBlog__titleBlock}>
          <TitleSection title='the latest news in digens' subtitle='Blog' />
        </div>
        <div className={styles.sectionBlog__content}>
          <Post title='the latest news in digens' subtitle='Blog' />
          <div>2</div>
        </div>
      </div>
    </section>
  );
};
