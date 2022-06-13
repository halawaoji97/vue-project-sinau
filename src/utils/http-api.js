import axios from 'axios';

// axios.defaults.baseURL = import.meta.env.BASE_URL;

const client = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    Authorization: `Bearer 790638a17d3f8b276c0c93c8afc07fe62576b6ba1507b1773854019d4026da24`,
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
