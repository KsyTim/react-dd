import React from "react";
import moment from 'moment';
import { useParams } from "react-router-dom";

const Event = ({events}) => {
  const { id } = useParams();
  const doEvent = (condition1, condition2) => (!id ? condition1 : condition2);
  const currentEventToEdit = () => events.filter(event => event._id === id);
  const {theme, comment, date} = currentEventToEdit()[0] ? currentEventToEdit()[0] : '';
  const formatDate = moment(date).utc().locale('en').format('YYYY-MM-DDTHH:mm');
  const currentEventInfo = (eventInfoItem, result = eventInfoItem) => eventInfoItem ? result : '';
  return (
    <section className="board">
      <form className="board__form">
        <h2 className="board__title">{doEvent('Добавление события', 'Редактирование события')}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
            defaultValue={currentEventInfo(theme)}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
            defaultValue={currentEventInfo(comment)}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            defaultValue={currentEventInfo(date, formatDate)}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{doEvent('Добавить', 'Сохранить')}</button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default Event;
