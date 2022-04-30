import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";
import { events } from '../../store/index'
import { action } from 'mobx';

const Filter = observer(() => {
  const { pathname } = useLocation();
  const {
    notArchiveEvents,
    pastData,
    todayData,
    futureData,
    favoriteData,
  } = events;
  const handleFiltered = action((event) => {
    events.notArchiveEventsFlag = false;
    events.pastDataFlag = false;
    events.todayDataFlag = false;
    events.futureDataFlag = false;
    events.favoriteDataFlag = false;
    events.filteredData = events[event.target.value]
    events[`${event.target.value}Flag`] = true;
  })
  return (
    <section className="main__filter filter">
      <input
        type="radio"
        id="filter__all"
        className="filter__input visually-hidden"
        name="filter"
        value={"notArchiveEvents"}
        defaultChecked
        disabled={!notArchiveEvents.length}
        onChange={handleFiltered}
      />
      <label htmlFor="filter__all" className="filter__label">
        Все <span className="filter__all-count count">
          {notArchiveEvents.length}
          </span></label>
      <input
        type="radio"
        id="filter__overdue"
        className="filter__input visually-hidden"
        name="filter"
        value={"pastData"}
        disabled={!pastData.length}
        onChange={handleFiltered}
      />
      <label htmlFor="filter__overdue" className="filter__label"
        >Прошедшие <span className="filter__overdue-count count">
          {pastData.length}
        </span></label>
      <input
        type="radio"
        id="filter__today"
        className="filter__input visually-hidden"
        name="filter"
        value={"todayData"}
        disabled={!todayData.length}
        onChange={handleFiltered}
      />
      <label htmlFor="filter__today" className="filter__label"
        >Сегодня <span className="filter__today-count count">
          {todayData.length}
        </span></label>
      <input
        type="radio"
        id="filter__future"
        className="filter__input visually-hidden"
        name="filter"
        value={"futureData"}
        disabled={!futureData.length}
        onChange={handleFiltered}
      />
      <label htmlFor="filter__future" className="filter__label"
        >Будущие <span className="filter__future-count count">
          {futureData.length}
        </span></label>
      <input
        type="radio"
        id="filter__favorite"
        className="filter__input visually-hidden"
        name="filter"
        value={"favoriteData"}
        disabled={!favoriteData.length}
        onChange={handleFiltered}
      />
      <label htmlFor="filter__favorite" className="filter__label">Избранное <span className="filter__favorite-count count">{favoriteData.length}</span></label>
      {pathname.length > 1 || <Link to={AppRoute.ADD} name="control"
      className="btn-add">Создать</Link>}
    </section>
  )
})

export default Filter;