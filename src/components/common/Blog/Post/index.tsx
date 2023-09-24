// import img1 from '~/assets/img/pages/home/blog/img-1.jpg';
import blogIcon from '~/assets/img/icons/blog-icon.svg';
import arrowIcon from '~/assets/img/icons/arrow-btn-icon.svg';

import styles from './index.module.css';

interface IPost {
  id: number;
  imgUrl: string;
  title: string;
  userName: string;
  date: string;
}
interface PropsIPost {
  data: IPost;
}

export const Post = ({ data }: PropsIPost) => {
  const { imgUrl, title, userName, date } = data;
  return (
    <div className={styles.post}>
      <div className={styles.postImgWrap}>
        <img src={imgUrl} alt='' className={styles.postImg} />
      </div>
      <div>
        <ul className={styles.postList}>
          <li className={styles.postListItem}>
            <span>{userName}</span>
          </li>
          <li className={styles.postListItem}>{date}</li>
          <li className={styles.postListItem}>
            <img src={blogIcon} alt='' className={styles.listIcon} />
          </li>
        </ul>
        <h4 className={styles.postTitle}>{title}</h4>
        <a href='/'>
          <img src={arrowIcon} alt='' className='styles.buttonLinkIcon' />
        </a>
      </div>
    </div>
  );
};
