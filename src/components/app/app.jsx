import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import Form from "../../pages/form/form";
import { AppRoute } from "../../const";
import NoPage from "../../pages/no-page/no-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact component={Main} />
        <Route path={AppRoute.ARCHIVE} exact component={Archive}/>
        <Route path={AppRoute.EVENT} exact component={Form}/>
        <Route path={'*'} component={NoPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;