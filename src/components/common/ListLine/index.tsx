import style from './index.module.scss';

interface PropsListLine {
  listMenu: string[];
}

export const ListLine = ({ listMenu }: PropsListLine) => {
  return (
    <ul className={style.menu}>
      {listMenu.map((item: any) => (
        <li key={item} className={style.menu__item}>
          <a href='/'>{item}</a>
        </li>
      ))}
    </ul>
  );
};
