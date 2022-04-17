import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import { AppRoute } from '../../const';

const Board = ({mode}) => {
  return (
    <section className="board">
      {mode === AppRoute.EVENT ?
        <>
          <Sorting />
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