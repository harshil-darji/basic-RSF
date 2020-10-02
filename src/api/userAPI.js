import axios from 'axios';
import {UserURL as userURL} from '../constants/endpointsAPI';

const fetchUsers = async () => {
  const response = await axios.get(userURL);
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const postUser = async (user) => {
  const response = await axios.post(userURL, user.payload);
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const deleteUser = async (userId) => {
  const response = await axios.delete(userURL + '/' + userId.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

const editUser = async (user) => {
  const response = await axios.put(userURL + '/' + user.payload._id.$oid, user.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

export { fetchUsers, postUser, deleteUser, editUser };