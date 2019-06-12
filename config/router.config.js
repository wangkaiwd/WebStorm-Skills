const routerConfig = [
  {
    path: '/',
    exact: true,
    component: 'a',
  },
  {
    path: '/list',
    component: 'b',
    Routes: ['routes/PrivateRoute.js'],
  },
  {
    path: '/redirect',
    redirect: '/users/guanguan',
  },
  {
    path: '/users/:name',
    exact: true,
    component: 'c',
  },
  {
    component: 'd',
  },
];
export default routerConfig;
