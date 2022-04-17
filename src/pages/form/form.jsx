import React from "react";
import Header from "../../components/header/header";
import Event from "../../components/event/event";
import { AppRoute } from "../../const";
import Filter from "../../components/filter/filter";

const Form = () => {
  return (
    <>
      <Header mode={AppRoute.MAIN} />
      <section className="main__wrapper">
        <Filter mode={AppRoute.EVENT}/>
        <Event mode={AppRoute.EVENT}/>
      </section>
    </>
  )
}

export default Form;