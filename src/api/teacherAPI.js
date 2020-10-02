import axios from 'axios';
import {TeacherURL as teacherURL} from '../constants/endpointsAPI';

const fetchTeachers = async () => {
  const response = await axios.get(teacherURL);
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const postTeacher = async (user) => {
  const response = await axios.post(teacherURL, user.payload);
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const deleteTeacher = async (userId) => {
  const response = await axios.delete(teacherURL + '/' + userId.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

const editTeacher = async (user) => {
  const response = await axios.put(teacherURL + '/' + user.payload._id.$oid, user.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

export { fetchTeachers, postTeacher, deleteTeacher, editTeacher };