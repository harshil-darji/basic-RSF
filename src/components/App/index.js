import React, { Fragment } from 'react'
import { Provider } from 'react-redux'

import UserTable from '../UserTable/UserTable'
import UserForm from '../UserForm/UserForm'
import './App.css'
import configureStore from '../../store'

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <div className="form">
                    <UserForm title="Add new user"/>
                </div>
                <div className="table">
                    <UserTable />
                </div>
            </Fragment>
        </Provider>
    )
}

export default App;