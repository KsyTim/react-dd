import React from "react";
import Board from "../../components/board/board";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import { AppRoute } from "../../const";

const Archive = () => {
  return (
    <>
      <Header mode={AppRoute.ARCHIVE} />
      <section className="main__wrapper">
        <Board event={AppRoute.EVENT} />
      </section>
    </>
  )
}

export default Archive;