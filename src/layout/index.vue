<template>
	<a-layout class="layout">
		<a-layout-header>
			<Header />
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200">
				<SideMenu />
			</a-layout-sider>
			<a-layout style="padding: 0 12px 12px">
				<MenuTabs />
				<a-layout-content :style="contentStyle">
					<router-view />
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-layout>
</template>
<script>
import Header from './Header.vue';
import SideMenu from './SideMenu.vue';
import MenuTabs from './MenuTabs.vue';
import { reactive } from 'vue';

export default {
	name: 'layout',
	components: {
		Header,
		SideMenu,
		MenuTabs,
	},
	setup() {
		const contentStyle = reactive({
			background: '#fff',
			padding: '12px',
			margin: 0,
			minHeight: '600px',
			textAlign: 'left',
		});
		return {
			contentStyle,
		};
	},
};
</script>
<style>
.layout {
	width: 100%;
	height: 100%;
}
</style>
