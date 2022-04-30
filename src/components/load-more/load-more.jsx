import React from "react";
import { events } from '../../store/index'
import styles from './load-more.module.css'
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../const";

const LoadMore = ({funcLoadMore, step}) => {
  const { pathname } = useLocation();
  return (
    <button 
      className={`load-more 
        ${ 
          pathname === AppRoute.MAIN ?
            step >= events.notArchiveEvents.length ? styles['btn__delete'] : '' :
          pathname === AppRoute.ARCHIVE ?
            step >= events.archiveEvents.length ? styles['btn__delete'] : ''
          : ''  
        }
      `} 
    type="button" onClick={funcLoadMore}>Загрузить еще</button>
  )
}

export default LoadMore;