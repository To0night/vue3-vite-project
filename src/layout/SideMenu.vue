<template>
	<a-menu
		v-model:selectedKeys="selectedKeys"
		v-model:openKeys="openKeys"
		mode="inline"
		:style="{ height: '100%', borderRight: 0 }"
		@click="menuChange"
	>
		<component
			v-for="subMenu of menuRoutes"
			:is="subMenu?.children?.length ? 'a-sub-menu' : 'a-menu-item'"
			:key="subMenu.name"
		>
			<template v-if="subMenu?.children?.length" #title>
				<StarOutlined />
				<span> {{ subMenu.name }} </span>
			</template>
			<div v-if="subMenu?.children?.length">
				<a-menu-item v-for="menu of subMenu.children" :key="menu.name">{{ menu.name }}</a-menu-item>
			</div>
			<span v-else> {{ subMenu.name }} </span>
		</component>
	</a-menu>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { routes } from '../router/index';
import { useRouter, useRoute } from 'vue-router';
import { StarOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';

export default {
	components: { StarOutlined },
	setup() {
		const menuRoutes = reactive(routes.find((i) => i.name === 'main').children);
		const openKeys = ref([menuRoutes[0].name]);
		const selectedKeys = ref([
			menuRoutes[0]?.children?.length ? menuRoutes[0].children[0].name : menuRoutes[0],
		]);
		const router = useRouter();
		const route = useRoute();
		const store = useStore();
		store.commit('user/addTabList', menuRoutes[0].name);
		store.commit('user/setTabValue', menuRoutes[0].name);
		// 监视ref所定义的一个响应式数据
		watch(selectedKeys, (newValue, oldValue) => {
			// console.log('selectedKeys', newValue, oldValue);
		});
		// 方法事件
		const methods = {
			menuChange({ item, key, keyPath }) {
				store.commit('user/addTabList', key);
				store.commit('user/setTabValue', key);
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
