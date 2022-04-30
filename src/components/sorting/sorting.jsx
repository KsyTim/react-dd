import { action } from 'mobx';
import { observer } from 'mobx-react-lite';
import React  from 'react';
import { events } from '../../store';

const Sorting = observer(() => {
  const handleSorted = action((event) => {
    events.filteredData = events[event.target.value]
  });
  return (
    <div className="board__filter-list">
      <span className="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        className="board__filter visually-hidden"
        name="board-filter"
        value={'defaultEvents'}
        defaultChecked
        onChange={handleSorted}
      />
      <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
      <input
        type="radio"
        id="board__filter-new"
        className="board__filter visually-hidden"
        name="board-filter"
        value={"newEventsFirst"}
        onChange={handleSorted}
      />
      <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
      <input
        type="radio"
        id="board__filter-old"
        className="board__filter visually-hidden"
        name="board-filter"
        value={"oldEventsFirst"}
        onChange={handleSorted}
      />
      <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
    </div>
  )
})

export default Sorting;