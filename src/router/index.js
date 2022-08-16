import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../layout/index.vue'),
		children:[
			{
				path: '/',
				name: 'user',
				component: () => import('../views/user/index.vue'),
			},
			{
				path: '/',
				name: 'manage',
				component: () => import('../views/manage/index.vue'),
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/index.vue'),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
