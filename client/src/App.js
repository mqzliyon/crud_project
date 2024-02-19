import React, {Component, Fragment} from "react";
import {BrowserRouter,Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
class App extends Component{
    render() {
        return(
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" Component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App;