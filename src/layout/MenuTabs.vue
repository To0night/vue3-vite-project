<template>
	<div class="menu-tab">
		<a-tabs
			v-model:activeKey="tabValue"
			hide-add
			type="editable-card"
			@edit="onEdit"
			@tabClick="onTabClick"
		>
			<a-tab-pane v-for="tab of tabList" :key="tab" :tab="tab" :closable="true"> </a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	name: 'MenuTabs',
	setup() {
		const router = useRouter();
		const store = useStore();
		// let state = computed(() => {
		// 	return {
		// 		tabList: store.getters['user/getTabList'],
		// 		tabValue: store.getters['user/getTabValue'],
		// 	};
		// });
		const tabList = computed(() => store.state.user.tabList);
		const tabValue = computed(() => store.state.user.tabValue);

		const onEdit = (key) => {
			store.commit('user/deleteTabList', key);
		};

		const onTabClick = (key) => {
			store.commit('user/setTabValue', key);
			router.push({
				name: key,
				query: {},
			});
		};

		return {
			tabList,
			tabValue,
			onEdit,
			onTabClick,
		};
	},
};
</script>

<style lang="less" scoped>
.menu-tab {
	margin-top: 10px;
	background: #fafafa;
}
.ant-tabs {
	// margin: 0 10px;
	/deep/ .ant-tabs-nav {
		margin-bottom: 0px;
		height: 30px;
		// border-bottom: 1px solid #1890ff;
		.ant-tabs-tab {
			margin: 0 !important;
			border-radius: 2px;
		}
		.ant-tabs-tab-active {
			// border-top-color: #1890ff;
			// border-left-color: #1890ff;
			// border-right-color: #1890ff;
			// border-bottom: 1px solid #fafafa;
		}
	}
}
</style>
