import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './header.module.css';

const Header = (currPage) => {
  const { page } = currPage;
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <Link to={AppRoute.MAIN} className={`main__header-logo ${styles.headerMainLink}`}>SomeList</Link>
        <div className="main__header-group-lnk">
          <Link to="/" className={`main__header-lnk ${(page === AppRoute.MAIN || /event[/]*\w*/g.test(page)) && 'lnk-active'}`}>События</Link>
          <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${page === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
        </div>
      </section>
    </section>
  )
}

export default Header;