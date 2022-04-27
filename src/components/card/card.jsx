import React from "react";
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
import moment from 'moment';
import 'moment/locale/ru';
import cn from 'classnames';
import styles from './card.module.css';
import { events } from '../../store/index'

const Card = ({_id, theme, comment, date, favorite, archive}) => {
  const formatDate = moment(date).utc().format('DD MMMM');

  const handleToArchive = (event) => {
    event.preventDefault();
    events.editEvent({
      id:_id,
      theme,
      comment,
      date, 
      favorite, 
      archive: !archive
    })
  }

  const handleToFavorite = (event) => {
    event.preventDefault();
    events.editEvent({
      id:_id,
      theme,
      comment,
      date, 
      favorite: !favorite, 
      archive
    })
  }

  const handleDelete = (event) => {
    event.preventDefault();
    events.deleteEvent(_id);
  }

  return (
    <article className="card">
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <Link 
              to={`${AppRoute.ADD}/${_id}`} 
              type="button" 
              className="card__btn card__btn--edit"
            >
              Редактировать
            </Link>
            <button 
              type="button" 
              className="card__btn card__btn--archive"
              onClick={handleToArchive}
            >
              В архив
            </button>
            <button
              type="button"
              className={`card__btn card__btn--favorites ${cn({[`${styles['card__btn--favorites__on']}`]:favorite})}`}
              onClick={handleToFavorite}
            >
              В избранное
            </button>
            <button
              type="button"
              className="card__btn card__btn--remove"
              onClick={handleDelete}
            >
              Удалить
            </button>
          </div>

          <div className="card__textarea-wrap">
            <p className="card__text--theme">{theme}</p>
            <p className="card__text--comment">{comment}</p>
          </div>

          <div className="card__settings">
            <span className="card__date">{formatDate}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card;