import React, { Fragment } from 'react'

import TeacherTable from '../TeacherTable/TeacherTable'
import TeacherForm from '../TeacherForm/TeacherForm'
import ButtonAppBar from '../Drawer/ButtonAppBar';
import './Teachers.css'

function Users() {
    return (
        <Fragment>
            <ButtonAppBar title="Teachers"/>
            <Fragment>
                <div className="form">
                    <TeacherForm title="Add new teacher"/>
                </div>
                <div className="table">
                    <TeacherTable />
                </div>
            </Fragment>
        </Fragment>
    )
}

export default Users;