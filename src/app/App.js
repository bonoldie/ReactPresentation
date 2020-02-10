import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { Homepage } from './containers/Homepage.container'
import { Slides } from './containers/Slides.contianer'

export const App = () => {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Switch>
                    {/* Base route*/}
                    <Route path="/" exact>
                        <Homepage />
                    </Route>

                    <Route path="/slides/:slideNo">
                        <Slides />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    )
}