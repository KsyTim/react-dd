import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = (props) => {
  const path = props.location.pathname
  return (
    <>
      <Header page={path} />
      <section className="main__wrapper">
        <Board page={path}/>
      </section>
    </>
  )
}

export default Archive;