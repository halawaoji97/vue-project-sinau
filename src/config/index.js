const app = {
  name: 'sinau-vue-project',
  version: '1.0.0',
  description: 'A Vue.js project for Sinau',
  users: {
    name: 'users',
    fields: [
      {
        name: 'no',
        label: 'no',
      },
      {
        name: 'name',
        label: 'Name',
      },
      {
        name: 'email',
        label: 'Email',
      },
      {
        name: 'gender',
        label: 'gender',
      },
      {
        name: 'status',
        label: 'status',
      },
      {
        name: 'action',
        label: 'action',
      },
    ],
    fieldsPost: [
      {
        name: 'no',
        label: 'no',
      },
      {
        name: 'title',
        label: 'title',
      },
      {
        name: 'body',
        label: 'body',
      },
      {
        name: 'action',
        label: 'action',
      },
    ],
  },
};

export { app };
