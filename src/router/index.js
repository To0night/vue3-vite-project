import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import('../layout/index.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('../views/home/index.vue'),
			},
			{
				path: '/menu',
				name: 'menu',
				children: [
					{
						path: '/user',
						name: 'user',
						component: () => import('../views/user/index.vue'),
					},
					{
						path: '/manage',
						name: 'manage',
						component: () => import('../views/manage/index.vue'),
					},
				],
			},
			{
				path: '/edit',
				name: 'edit',
				component: () => import('../views/edit/index.vue'),
			},
		],
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
