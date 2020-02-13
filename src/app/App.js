import React from 'react'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import { Homepage } from './containers/Homepage.container'
import { Slides } from './containers/Slides.contianer'

export const App = () => {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    {/* Base route*/}
                    <Route path="/" exact>
                        <Redirect to="/slides"  />
                    </Route>

                    <Route path="/slides/:slideNo">
                        <Slides />
                    </Route>

                    <Route path="/slides" exact>
                        <Redirect to="/slides/1" />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )
}