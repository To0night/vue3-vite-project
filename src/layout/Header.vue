<template>
	<div class="header">
		<div class="header-left">
			<menu-fold-outlined v-if="expendsMenu" @click="handleExpendsMenu(false)" />
			<menu-unfold-outlined v-else @click="handleExpendsMenu(true)" />
		</div>
		<div class="header-right">
			<a-popover>
				<template #content>
					<p>
						<a-button type="text" @click="userInfo"><user-outlined /> 用户信息</a-button>
					</p>
					<p>
						<a-button type="text" @click="logout"><poweroff-outlined /> 退出登录</a-button>
					</p>
				</template>
				<span><user-outlined /> Soul</span>
			</a-popover>
		</div>
	</div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ref, watch, toRefs } from 'vue';
export default {
	props: {
		expendsMenu: {
			type: Boolean,
		},
	},
	setup(props, context) {
		let { expendsMenu } = toRefs(props);
		const handleExpendsMenu = (bool) => {
			context.emit('sendEmit', bool);
		};

		const router = useRouter();
		const userInfo = () => {
			router.push('/user');
		};
		const logout = () => {
			window.localStorage.removeItem('token');
			location.reload();
			// router.go(0)
		};
		return {
			userInfo,
			logout,
			expendsMenu,
			handleExpendsMenu,
		};
	},
};
</script>

<style lang="less" scoped>
.header {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #fff;
	.header-left {
		margin-left: 12px;
		.anticon {
			font-size: 22px;
		}
	}
	.header-right {
		margin-right: 20px;
	}
}
.ant-popover-inner-content {
	padding: 10px 12px;
}
</style>
