import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Error from "../error/error";
import { AppRoute, Data } from '../../const';
import { useLocation } from "react-router-dom";

const Board = ({events, event = Data.CARDS}) => {
  const {pathname} = useLocation();
  const isExist = () => {
    for(let key in AppRoute) {
      if (AppRoute[key] === pathname) {
        return true;
      }
    }
    return false;
  }
  return (
    <section className="board">
      {isExist() ? 
        event ?
          <>
            {pathname === AppRoute.MAIN && <Sorting />}
            {isExist() ? 
            <>
              <div className="board__events">
                {events.map(event => <Card {...event} key={event._id} />)}
              </div>
              <LoadMore />
            </>
            : <Error />} 
          </>       
        : <NoEvents />
      : <Error/>}
    </section>
  )
}

export default Board;