import { TitleSection } from '~/components/common/TitleSection';
import { Post } from '~/components/common/Blog/Post';
import { RButtonLink } from '~/components/UI/RButtonLink';
import wavesImage from '~/assets/img/waves.svg';

import { postsList } from './config';
import styles from './index.module.css';
import { BlockVerticalTitle } from '~/components/common/BlockVerticalTitle';

export const Blog = () => {
  return (
    <section className={styles.sectionBlog}>
      <BlockVerticalTitle title='News' subtitle='our blog' />

      <div className={styles.wrapper}>
        <div className={styles.titleWrap}>
          <TitleSection title='The latest news in digens' subtitle='Blog' />
          <RButtonLink text='read blog' />
        </div>
        <div className={styles.contentWrap}>
          {postsList.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
      <img src={wavesImage} alt='' className={styles.wavesImg} />
    </section>
  );
};
