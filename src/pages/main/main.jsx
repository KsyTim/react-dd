import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { AppRoute } from "../../const";

const Main = () => {
  return (
    // <React.Fragment>
    <>
      <Header mode={AppRoute.MAIN}/>
      <section className="main__wrapper">
        <Filter />
        <Board event={AppRoute.EVENT} page={AppRoute.MAIN}/> 
      </section>
    </>      
    // </React.Fragment>
  )
}

export default Main;