import { TitleSection } from '~/components/common/TitleSection';
import { Post } from '~/components/common/Blog/Post';
import { VerticalTitle } from '~/components/common/VerticalTitle';
import { postsList } from './config';
import styles from './index.module.css';

export const Blog = () => {
  return (
    <section className={styles.sectionBlog}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperTitle}>
          <TitleSection
            title='The latest news in digens'
            subtitle='Blog'
            textLink='read blog'
            linkPath='/'
          />
        </div>
        <div className={styles.list}>
          {postsList.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
      <VerticalTitle bigTitle='news' title='our blog' />
    </section>
  );
};
