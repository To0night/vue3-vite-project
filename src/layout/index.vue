<template>
	<a-layout class="layout">
		<a-layout-sider width="200" :collapsed="!expendsMenu" :collapsedWidth="36">
			<div class="side-header">
				<h1 class="side-title">{{ expendsMenu ? 'Vue3 Project' : 'V' }}</h1>
			</div>
			<SideMenu :expendsMenu="expendsMenu" />
		</a-layout-sider>
		<a-layout>
			<a-layout-header>
				<Header :expendsMenu="expendsMenu" @sendEmit="sendEmit" />
			</a-layout-header>
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
import { reactive, ref } from 'vue';

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
		let expendsMenu = ref(true);
		const sendEmit = (bool) => {
			expendsMenu.value = bool;
		};
		return {
			contentStyle,
			expendsMenu,
			sendEmit,
		};
	},
};
</script>
<style lang="less" scoped>
.layout {
	width: 100%;
	height: 100%;
	.side-header {
		width: 100%;
		height: 64px;
		background: #1890ff;
		line-height: 64px;
		padding: 0 12px;
		border-right: 1px solid #eee;
		.side-title {
			color: #fff;
		}
	}
	/deep/ .ant-layout-header {
		padding: 0;
		background: #1890ff;
	}
}
</style>
