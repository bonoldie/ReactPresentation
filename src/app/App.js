import React from 'react'
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Slides } from './containers/Slides.container'
import { Examples } from './containers/Examples.container'

export const App = () => {
    const history = createBrowserHistory();
    
    return (
        <div className="container-fluid">
            <Router history={history}>

                {
                    history && history.location ?
                        <button className="btn btn-slides-swap position-fixed grad font-weight-bold"
                            onClick={
                                () =>
                                    (history.location.pathname.includes('examples')) ? history.goBack() : history.push('/examples')
                            }>  SWITCH <i className="fas fa-angle-right" ></i>
                        </button>
                        :
                        null
                }

                <Switch>
                    {/* Base route*/}
                    <Route path="/" exact>
                        <Redirect to="/slides" />
                    </Route>

                    <Route path="/examples" render={(props) => <Examples {...props} />} />

                    <Route path="/slides/:slideNo" render={(props) => <Slides {...props} />} />

                    <Route path="/slides" exact>
                        <Redirect to="/slides/1" />
                    </Route>

                </Switch>
            </Router>
        </div>
    )
}