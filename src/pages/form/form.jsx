import React from "react";
import Header from "../../components/header/header";
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";
import { useHistory } from "react-router-dom";

const Form = ({events}) => {
  const hist = useHistory();
  const path = hist.location.pathname;
  return (
    <>
      <Header page={path} />
      <section className="main__wrapper">
        <Filter page={path}/>
        <Event page={path} events={events}/>
      </section>
    </>
  )
}

export default Form;