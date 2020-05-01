export const fetchCurrentUser = async () => {
  const response = await axios.get('/users/current');
  return await response.data;
};

export const fetchAllPersonnel = async () => {
  const response = await axios.get('/manager');
  return await response.data.data;
};

export const fetchUsers = async () => {
  const response = await axios.get('/users');
  return await response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/manager/delete/${id}`);
  return await response.data;
};

export const addUser = async (user) => {
  const response = await axios.post('/manager', user);
  return await response.data;
}
