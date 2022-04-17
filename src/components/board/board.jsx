import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import { AppRoute } from '../../const';

const Board = ({event = false, page = false}) => {
  return (
    <section className="board">
      {event === AppRoute.EVENT ?
        <>
          {page === AppRoute.MAIN && <Sorting />}
          <div className="board__events">
            <Card />
          </div>
          <LoadMore /> 
        </>
        : <NoEvents/>}
    </section>
  )
}

export default Board;