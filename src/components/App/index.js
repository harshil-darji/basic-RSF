import React, { Fragment } from 'react'
import UserTable from '../Table/Table'
import UserForm from '../UserForm/UserForm'
import './App.css'

function App() {
    return (
        <Fragment>
            <div className="form">
                <UserForm/>
            </div>
            <div className="table">
                <UserTable rows={[{name:"Harshil", id: '2', email: 'hd@gmail.com', gender: 'M', country: 'India', phone: '9898898'}]}/>
            </div>
        </Fragment>
    )
}

export default App;