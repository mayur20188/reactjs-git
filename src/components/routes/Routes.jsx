import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '.';
import Header from '../layout/Header';

const Routes = () => {
    return(
        <>
            <Router>
                <Header/>
                <div className="content-view">
                    {routes.map(({path, exact, component}, key) =>
                        {
                            return (
                                <Route exact={exact} path={path} component={component} key={key} />
                            )
                        }
                    )}
                </div>
            </Router>
        </>
    )
}

export default Routes;