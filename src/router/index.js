import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
	{
		path: '/',
		component: () => import('../components/HelloWorld.vue'),
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
