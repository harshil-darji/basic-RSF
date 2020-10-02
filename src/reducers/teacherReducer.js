import TEACHER from '../constants/teacherConstants';

const teacherReducer = (state = [], action) => {
    switch (action.type) {
        case TEACHER.LOAD_SUCCESS:
            return [...action.teachers]
        default:
            return state;
    }
}

export default teacherReducer;