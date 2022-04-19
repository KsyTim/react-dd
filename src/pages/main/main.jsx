import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";

const Main = (props) => {
  const path = props.location.pathname;
  return (
    <>
      <Header page={path}/>
      <section className="main__wrapper">
        <Filter page={path}/>
        <Board page={path} /> 
      </section>
    </>      
  )
}

export default Main;