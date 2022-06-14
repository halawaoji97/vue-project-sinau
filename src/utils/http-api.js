import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    'Content-type': 'application/json',
  },
});

const getUsers = (path) => {
  return client.get(path);
};

const getUserById = (id) => {
  return client.get(`users/${id}`);
};

const postUser = (path, data) => {
  return client.post(path, data);
};
const removeUser = (id) => {
  return client.delete(id);
};

const update = (path, data) => {
  return client.put(path, data);
};

const getAllPosts = () => {
  return client.get('posts');
};

const getUserPost = (id) => {
  return client.get(`posts/${id}`);
};

const addUserPost = (path, id, data) => {
  return client.post(path, id, data);
};
const removeUserPost = (path) => {
  return client.delete(path);
};

export {
  getUsers,
  postUser,
  removeUser,
  update,
  getAllPosts,
  getUserPost,
  addUserPost,
  removeUserPost,
  getUserById,
};
