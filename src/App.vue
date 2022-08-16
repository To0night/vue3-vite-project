<template>
	<div class="app">
		<router-view />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
});
</script>

<style lang="less" scoped>
.app{
	width: 100%;
	height: 100%;
}
</style>
