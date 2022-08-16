import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
	{
		path: '/',
		component: () => import('../layout/index.vue'),
		children:[
			{
				path: '/',
				component: () => import('../views/user/index.vue'),
			}
		]
	},
	{
		path: '/login',
		component: () => import('../views/login/index.vue'),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
