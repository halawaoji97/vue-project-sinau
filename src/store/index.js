import { createStore, createLogger } from 'vuex';

import user from './modules/user';

const modules = {
  user,
};

export default createStore({
  modules,
  strict: true,
  plugins: [createLogger()],
});
