import React from "react";
import { AppRoute } from '../../const';

const Event = (currPage) => {
  const { page } = currPage;
  const doEvent = (event, condition1, condition2) => (page === event || page === `${event}/`) ? condition1 : condition2;
  return (
    <section className="board">
      <form className="board__form">
        <h2 className="board__title">
          {
            doEvent(AppRoute.ADD, 'Добавление события', 'Редактирование события')
          }
        </h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">
            {
              doEvent(AppRoute.ADD, 'Добавить', 'Сохранить')
            }
          </button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default Event;
