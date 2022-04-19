import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import NoEvents from "../no-events/no-events";
import Error from "../error/error";
import { AppRoute } from '../../const';

const Board = ({page = false, exist = true, event = AppRoute.CARDS}) => {
  return (
    <section className="board">
      {exist ? 
        event ?
          <>
            {page === AppRoute.MAIN && <Sorting />}
            {exist ? 
            <>
              <div className="board__events">
                <Card />
              </div>
              <LoadMore />
            </>
            : <Error/>} 
          </>       
        : <NoEvents page={page}/>
      : <Error/>}
    </section>
  )
}

export default Board;