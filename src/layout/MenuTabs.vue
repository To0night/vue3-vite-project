<template>
	<div class="menu-tab">
		<div 
			class="tab-item" 
			v-for="tab of tabList" 
			:key="tab" 
			:draggable="true"
			@drop.prevent="drop($event, tab)"
			@dragover.prevent="dragover($event)" 
			@dragstart="dragstart($event, tab)">
			<a-popover overlayClassName="class-popover" trigger="contextmenu" placement="bottom">
				<template #content>
					<div>
						<a-button type="text" @click="closeOtherTab(tab)">关闭其他标签</a-button>
					</div>
				</template>
				<a-tag :class="tabValue===tab?'current-tab':''" :title="tab"  @click="onTabClick(tab)" >
					<span class="tab-text">{{ tab }}</span>
					<close-outlined @click.stop="onClose(tab)" />
				</a-tag>
			</a-popover>
		</div>
	</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { message } from 'ant-design-vue';
export default {
	name: 'MenuTabs',
	setup() {
		const route = useRoute(); 
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

		const addTabs = (key) => { 
			store.commit("user/addTabList", key);
			store.commit("user/setTabValue", key); 
		}

		watch(route, (newRoute) => {
			addTabs(newRoute.name);
    }, { deep: true, immediate: true });

		const onClose = (key) => {
			if(tabList.value.length > 1) {
				store.commit('user/deleteTabList', key);
				if(key === tabValue.value) {
					router.go(-1);
				}
			} else {
				message.warning('只剩一个页面无法关闭！')
			}
		};

		const onTabClick = (key) => {
			store.commit('user/setTabValue', key);
			router.push({
				name: key,
				query: {},
			});
		};

		const closeOtherTab = (tab) => {
			router.push({
				name: tab,
				query: {},
			});
			store.commit('user/deleteOtherTabList', tab);
		}

		// 开始拖拽传入数据
		const dragstart = (e, tab) => {
			e.dataTransfer.setData("tab", tab);
		}
		// 拖拽中
		const dragover = (e) => {
			// e.preventDefault();
		}
		// 拖拽放置完成处理
		const drop = (e, endTab) => {
			// e.preventDefault(); 
			let startTab = e.dataTransfer.getData("tab");
			store.commit('user/exchangeTabList', [startTab, endTab]);
		}

		return {
			tabList,
			tabValue,
			onClose,
			onTabClick,
			addTabs,
			dragstart,
			drop,
			dragover,
			closeOtherTab
		};
	},
};
</script>

<style lang="less" scoped>
.menu-tab {
	margin-top: 10px;
	background: #fafafa;
	.tab-item{
		display: inline-block;
		.ant-tag {
			width: 100px;
			text-align: center;
			margin-right: 0;
			height: 30px;
			line-height: 30px;
			border-radius: 2px;
			border: 1px solid #f0f0f0;
			padding: 0 12px;
			.tab-text{
				display: inline-block;
				width: 55px;
				text-overflow: ellipsis;
				white-space: nowrap;
				// overflow: hidden;
			}
		}

		.current-tab{
			color: #1890ff;
			background: #fff;
		}
	}
}

</style>
