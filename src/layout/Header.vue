<template>
  <div class="header">
    <h2 class="title">hello world</h2>
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
import { useRouter } from "vue-router";
export default {
  setup() {
		const router = useRouter();
		const userInfo = () => {
			router.push('/user')
		}
		const logout = () => {
			window.localStorage.removeItem('token')
			location.reload()
			// router.go(0)
		}
    return {
      userInfo,
			logout
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
  .title {
    margin-left: 20px;
    color: #fff;
  }
  .header-right {
    margin-right: 20px;
  }
}
.ant-popover-inner-content{
	padding: 10px 12px;
}
</style>
