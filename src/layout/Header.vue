<template>
	<div class="header">
		<h2 class="title">hello</h2>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		return {
			selectedKeys1: ref(['3']),
		};
	},
};
</script>

<style lang="less" scoped>
.header {
	width: 100%;
	text-align: left;
	.title {
		color: rgb(231, 227, 227);
	}
}
</style>
