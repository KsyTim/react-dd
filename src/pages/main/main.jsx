import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Board from "../../components/board/board";
import { useHistory } from "react-router-dom";

const Main = ({events}) => {
  const hist = useHistory();
  const path = hist.location.pathname;
  return (
    <>
      <Header page={path}/>
      <section className="main__wrapper">
        <Filter page={path}/>
        <Board page={path} events={events} /> 
      </section>
    </>      
  )
}

export default Main;