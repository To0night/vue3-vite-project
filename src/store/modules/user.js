const user = {
	namespaced: true, // 为每个模块添加一个前缀名，保证模块命明不冲突
	state: {
		account: '',
		password: '',
		routerTree: [],
		tabValue: '',
		tabList: [],
	},
	getters: {
		getTabList(state) {
			return state.tabList;
		},
		getTabValue(state) {
			return state.tabValue;
		},
	},
	mutations: {
		setTabValue(state, value) {
			state.tabValue = value;
		},
		setTabList(state, tabList) {
			state.tabList = tabList;
		},
		addTabList(state, name) {
			if (!state.tabList?.find((v) => v === name)) {
				state.tabList.push(name);
			}
		},
		deleteTabList(state, name) {
			if (state.tabList.find((v) => v === name)) {
				state.tabList.splice(
					state.tabList.findIndex((v) => v === name),
					1
				);
			}
		},
	},
	actions: {},
};

export default user;
