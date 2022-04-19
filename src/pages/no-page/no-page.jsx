import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

const NoPage = (props) => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Board page={props.location.pathname} exist={false}/>
      </section>
    </>
  )
}

export default NoPage;