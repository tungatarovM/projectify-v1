export const fetchCurrentUser = async () => {
  const response = await axios.get('/users/current');
  return await response.data.data;
};

export const fetchAllPersonnel = async () => {
  const response = await axios.get('/manager');
  return await response.data.data;
};

export const fetchUsers = async () => {
  const response = await axios.get('/users');
  return await response.data;
};

export const fetchProjects = async () => {
  const response = await axios.get('/projects');
  console.log('response from fetchProjects', response);
  return await response.data.data;
}

export const deleteUser = async (id) => {
  const response = await axios.delete(`/manager/delete/${id}`);
  return await response.data;
};

export const addUser = async (user) => {
  const response = await axios.post('/manager', user);
  return await response.data.data;
};

export const changeRole = async (personnel, role) => {
  const response = await axios.post('/manager/change', {
    personnel, role,
  });
  console.log('response from changeRole', response);
  return await response.data.data;
};

export const logout = async () => {
  await axios.post('/logout');
  return window.location.replace('/login');
};

export const addProject = async (data) => {
  const response = await axios.post('/projects', data);
  console.log('response from addProject', response);
  return response.data.data;
};

export const deleteProject = async (id) => {
  const response = await axios.delete(`/projects/${id}`);
  return response.data;
}
