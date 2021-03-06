import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

export default function Router(props) {
    return (
        <Switch>
            {routes.map(route => (
                <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
                />
            ))}
            <Route render={() => <h2>Page does not exist</h2>} />
        </Switch>
    );
}