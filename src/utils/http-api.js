import axios from 'axios';

const client = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    Authorization: `Bearer 790638a17d3f8b276c0c93c8afc07fe62576b6ba1507b1773854019d4026da24`,
    'Content-type': 'application/json',
  },
});

const getUsers = () => {
  return client.get('users');
};

const post = (path, data) => {
  return client.post(path, data);
};
const remove = (path) => {
  return client.delete(path);
};

const update = (path, data) => {
  return client.put(path, data);
};

const getAllPosts = () => {
  return client.get('posts');
};

const getPostById = (id) => {
  return client.get(`posts/${id}`);
};

const addUserPost = (path, data) => {
  return client.post(path, data);
};
const removeUserPost = (path) => {
  return client.delete(path);
};

export {
  getUsers,
  post,
  remove,
  update,
  getAllPosts,
  getPostById,
  addUserPost,
  removeUserPost,
};
