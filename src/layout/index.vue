<template>
	<a-layout class="layout">
		<a-layout-header class="header">
			<Header />
		</a-layout-header>
		<a-layout>
			<a-layout-sider width="200" style="background: #fff">
				<SideMenu />
			</a-layout-sider>
			<a-layout style="padding: 0 12px 12px">
				<MenuTabs />
				<a-layout-content
					:style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
				>
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

export default {
	name: 'layout',
	components: {
		Header,
		SideMenu,
		MenuTabs,
	},
};
</script>
<style>
.layout {
	width: 100%;
	height: 100%;
}
</style>
