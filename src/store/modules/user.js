import {
  addUserPost,
  getAllPosts,
  getUserById,
  getUsers,
  postUser,
  removeUser,
  removeUserPost,
  update,
} from '../../utils/http-api';
import { serializeQueryParams } from '@/utils/query';

const state = {
  users: [],
  user: {},
  userPosts: [],
  userPost: {},
  usersPaging: {},
  currentPage: '',
};

const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
  userPosts: (state) => state.userPosts,
  userPost: (state) => state.userPost,
  usersPaging: (state) => state.usersPaging,
  currentPage: (state) => state.currentPage,
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_USER_POSTS(state, userPosts) {
    state.userPosts = userPosts;
  },
  SET_USER_POST(state, userPost) {
    state.userPost = userPost;
  },
  SET_USERS_PAGING(state, usersPaging) {
    state.usersPaging = usersPaging;
  },
  SET_CURRENT_PAGE(state, currentPage) {
    state.currentPage = currentPage;
  },
};

const actions = {
  // async getUsers({ commit }, { params, page }) {
  //   await getUsers('/users').then((response) => {
  //     console.log('response', response);
  //     commit('SET_USERS', response.data);
  //     commit('SET_USERS_PAGING', response.headers);
  //     commit('SET_CURRENT_PAGE', response.headers['x-links-current']);
  //   });
  // },

  async getUsers({ commit }, { params = {} }) {
    await getUsers(`/users${serializeQueryParams(params)}`).then((response) => {
      console.log('response', response);
      commit('SET_USERS', response.data);
      commit('SET_USERS_PAGING', response.headers);
      commit('SET_CURRENT_PAGE', response.headers['x-links-current']);
    });
  },
  async getUser({ commit }, id) {
    await getUserById(id).then((response) => {
      commit('SET_USER', response.data);
    });
  },

  async insertUser({ commit }, user) {
    await postUser('users', user).then((response) => {
      commit('SET_USER', response.data);
    });
  },

  async updateUser({ commit }, user) {
    await update(`users/${user.id}`, user).then((response) => {
      commit('SET_USER', response.data);
    });
  },

  async removeUser({ commit }, id) {
    await removeUser(`users/${id}`, {
      status: 'deleted',
    }).then((response) => {
      commit('SET_USER', response.data);
    });
  },

  async getAllPosts({ commit }) {
    await getAllPosts().then((response) => {
      commit('SET_USER_POSTS', response.data);
    });
  },

  async getUserPost({ commit }, id) {
    await getUserById(id).then((response) => {
      commit('SET_USER_POST', response.data);
    });
  },

  async addUserPost({ commit }, { id, post = {} }) {
    await addUserPost(`users/${id}/posts`, post).then((response) => {
      commit('SET_USER_POST', response.data);
    });
  },

  async removeUserPost({ commit }, id) {
    await removeUserPost(`posts/${id}`).then(() => {
      commit('SET_USER_POST', {});
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
