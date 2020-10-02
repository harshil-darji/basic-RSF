import TEACHER from '../constants/teacherConstants';

// Create Teacher actions

const createTeacher = teacher => ({
    type: TEACHER.CREATE,
    payload: teacher
})

const addedTeacherToDb = {
    type: TEACHER.CREATE_SUCCESS,
}

const createTeacherError = error => ({
    type: TEACHER.CREATE_FAIL,
    error
})

// Get TEACHER actions

const loadTeachers = () => ({
    type: TEACHER.LOAD
})

const setTeachers = teachers => ({
    type: TEACHER.LOAD_SUCCESS,
    teachers
})

const setTeachersError = error => ({
    type: TEACHER.LOAD_FAIL,
    error
})

// Delete TEACHER actions

const deleteTeacher = (teacherId) => ({
    type: TEACHER.DELETE,
    payload: teacherId
})

const deleteTeacherComplete = {
    type: TEACHER.DELETE_SUCCESS
}

const deleteTeacherError = error => ({
    type: TEACHER.DELETE_FAIL,
    error
})

// Edit Teacher actions

const editTeacher = (teacherId) => ({
    type: TEACHER.EDIT,
    payload: teacherId
})

const editTeacherComplete = {
    type: TEACHER.EDIT_SUCCESS
}

const editTeacherError = error => ({
    type: TEACHER.EDIT_FAIL,
    error
})

export { createTeacher, addedTeacherToDb, createTeacherError, loadTeachers, setTeachers, setTeachersError, deleteTeacher, deleteTeacherComplete, deleteTeacherError, editTeacher, editTeacherComplete, editTeacherError };