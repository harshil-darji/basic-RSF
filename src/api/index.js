import axios from 'axios';

const fetchUsers = async () => {
  const response = await axios.get('http://127.0.0.1:5000/users');
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const postUser = async (user) => {
  const response = await axios.post('http://127.0.0.1:5000/users', user.payload);
  if (response.status >= 400)
    throw new Error('Error!');
  return response.data;
}

const deleteUser = async (userId) => {
  const response = await axios.delete('http://127.0.0.1:5000/users/' + userId.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

const editUser = async (user) => {
  const response = await axios.put('http://127.0.0.1:5000/users/' + user.payload._id.$oid, user.payload);
  if(response.status >= 400)
    throw new Error("Error!");
  return response.data;
}

export { fetchUsers, postUser, deleteUser, editUser };