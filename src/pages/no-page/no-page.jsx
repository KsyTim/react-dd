import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

const NoPage = () => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Board />
      </section>
    </>
  )
}

export default NoPage;