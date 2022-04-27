import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import styles from './header.module.css';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <Link to={AppRoute.MAIN} className={`main__header-logo ${styles.headerMainLink}`}>SomeList</Link>
        <div className="main__header-group-lnk">
          <Link to="/" className={`main__header-lnk ${(pathname === AppRoute.MAIN || /event[/]*\w*/g.test(pathname)) && 'lnk-active'}`}>События</Link>
          <Link to={AppRoute.ARCHIVE} className={`main__header-lnk ${pathname === AppRoute.ARCHIVE && 'lnk-active'}`}>Архив</Link>
        </div>
      </section>
    </section>
  )
}

export default Header;