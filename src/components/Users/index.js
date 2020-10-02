import React, { Fragment } from 'react'
import { Provider } from 'react-redux'

import UserTable from '../UserTable/UserTable'
import UserForm from '../UserForm/UserForm'
import ButtonAppBar from '../Drawer/ButtonAppBar';
import './Users.css'
import configureStore from '../../store'

const store = configureStore();

function Users() {
    return (
        <Provider store={store}>
            <ButtonAppBar title="Users"/>
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

export default Users;