<template>
	<a-menu
		v-model:selectedKeys="selectedKeys"
		v-model:openKeys="openKeys"
		mode="inline"
		:style="{ height: 'calc(100% - 64px)', borderRight: 0 }"
		@click="menuChange"
	>
		<component v-for="subMenu of menuRoutes" :is="subMenu?.children?.length ? 'a-sub-menu' : 'a-menu-item'" :key="subMenu.name">
			<template v-if="subMenu?.children?.length" #title>
				<StarOutlined />
				<span style="margin-left: 5px"> {{ subMenu.name }} </span>
			</template>
			<div v-if="subMenu?.children?.length">
				<a-menu-item v-for="menu of subMenu.children" :key="menu.name">
					{{ menu.name }}
				</a-menu-item>
			</div>
			<span v-else>
				<StarOutlined />
				<span style="margin-left: 5px"> {{ subMenu.name }} </span>
			</span>
		</component>
	</a-menu>
</template>

<script>
import { ref, reactive, watch, toRefs } from 'vue';
import { routes } from '../router/index';
import { useRouter, useRoute } from 'vue-router';

export default {
	setup(props) {
		const menuRoutes = reactive(routes.find((i) => i.name === 'main').children);
		const openKeys = ref([menuRoutes[0].name]);
		const selectedKeys = ref([menuRoutes[0]?.children?.length ? menuRoutes[0].children[0].name : menuRoutes[0]]);
		const router = useRouter();
		const route = useRoute();
		// 监视ref所定义的一个响应式数据
		watch(
			route,
			(newRoute) => {
				selectedKeys.value.pop();
				selectedKeys.value.push(newRoute.name);
			},
			{ deep: true, immediate: true }
		);
		// 方法事件
		const methods = {
			menuChange({ item, key, keyPath }) {
				router.push({
					name: key,
					query: {},
				});
			},
		};
		return {
			openKeys,
			selectedKeys,
			menuRoutes,
			...methods,
		};
	},
};
</script>

<style lang="less" scoped>
.header {
	width: 100%;
}
</style>
