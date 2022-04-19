import React from "react";
import Header from "../../components/header/header";
import Event from "../../components/event/event";
import Filter from "../../components/filter/filter";

const Form = (props) => {
  const path = props.location.pathname;
  return (
    <>
      <Header page={path} />
      <section className="main__wrapper">
        <Filter page={path}/>
        <Event page={path}/>
      </section>
    </>
  )
}

export default Form;