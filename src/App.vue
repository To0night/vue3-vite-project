<template>
	<div id="app" class="theme">
		<h1>HelloWorld</h1>
		<router-view />
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
});
</script>

<style lang="less" scoped></style>
