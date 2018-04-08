import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

import {store} from '../store';
import Header from './Header';
import Users from '../containers/Users';
import UserAdd from '../containers/UserAdd'
import UserEdit from '../containers/UserEdit'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

export class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact path="/" component={Users}/>
                            <Route path="/add" component={UserAdd}/>
                            <Route path="/edit/:id" component={UserEdit}/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
