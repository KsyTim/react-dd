import React, { useEffect, useState } from "react";
import { AppRoute } from '../../const';
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { addEvent, editEvent } from "../../api";

const Event = ({page, events}) => {
  const doEvent = (event, condition1, condition2) => (page === event || page === `${event}/`) ? condition1 : condition2;
  const editClickedEventId = page.replace(/\/\w*\/?/g, '');
  const currentEventToEdit = () => events.filter(event => event._id === editClickedEventId);
  const {theme, comment, date} = currentEventToEdit()[0] ? currentEventToEdit()[0] : '';
  const formatDate = (date) => moment(date).utc().locale('en').format('YYYY-MM-DDTHH:mm');
  const currentEventInfo = (eventInfoItem, result = eventInfoItem) => eventInfoItem ? result : '';
  const [info, setInfo] = useState('');
  useEffect(() => setInfo(events), [events])

  const history = useHistory();
  let isEdit = false;

  const handleFieldChange = (param) => {
    // return function (evt) {
    //   if(currentEventToEdit().length) {
    //   isEdit = true;
    //   const { name, value } = evt.target;
    //   currentEventToEdit()[0][name] = value;
    //   currentEventToEdit()[0]['date'] = moment(new Date()).locale('en').format('YYYY-MM-DDTHH:mm');
    //   setInfo(currentEventToEdit()[0])
    // } 
    // const value = evt.target.value
    // setInfo({...info ,[param]: value})
    // }
    // return function (evt) {
    //   if(currentEventToEdit().length) {
    //   isEdit = true;
    //   const { value } = evt.target;
    //   setInfo({...info ,[param]: value})
    // } 
    // const value = evt.target.value
    // setInfo({...info ,[param]: value})
    // }
    return function (evt) {
      if(currentEventToEdit().length) {
      isEdit = true;
      const { value } = evt.target;
      currentEventToEdit()[0][param] = value;
      setInfo(currentEventToEdit()[0])
    } 
    const value = evt.target.value
    setInfo({...info ,[param]: value})
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    currentEventToEdit().length ? 
      editEvent({
        id: currentEventToEdit()[0]._id,
        ...info
      }) : 
        addEvent({
          id: info._id,
          archive: false,
          favorite: false,
          date: moment(new Date()).locale('en').format('YYYY-MM-DDTHH:mm'),
          ...info,
        })
    history.push('/');
    // console.log(currentEventToEdit().length ? info : info);
  }


  // const [info, setInfo] = useState('');
  //   useEffect(() => setInfo(events), [events])

  //   const history = useHistory();

  //   const handleSubmit = (evt) => {
  //       currentEventToEdit().length ? 
  //         editEvent({
  //           id: currentEventToEdit()[0]._id,
  //           ...info
  //         }) : 
  //           addEvent({
  //             id: info._id,
  //             ...info,
  //           })
  //       history.push('/');
  //   }

  return (
    <section className="board">
      <form 
        className="board__form" 
        onSubmit={handleSubmit}
      >
        <h2 className="board__title">{doEvent(AppRoute.ADD, 'Добавление события', 'Редактирование события')}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
            defaultValue={currentEventInfo(theme)}
            onChange={handleFieldChange('theme')}
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
            onChange={handleFieldChange('comment')}
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">Дата:</label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            defaultValue={currentEventInfo(date, formatDate(date))}
            onChange={handleFieldChange('date')}
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">{doEvent(AppRoute.ADD, 'Добавить', 'Сохранить')}</button>
          <button type="reset" className="btn-reset">Очистить</button>
        </div>
      </form>
    </section>
  )
}

export default Event;
