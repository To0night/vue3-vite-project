<script setup>
import { ref } from 'vue';

defineProps({
	msg: String,
});

const count = ref(0);
</script>

<template>
	<div class="home">home</div>
</template>

<style lang="less" scoped>
.home {
	width: 100%;
}
</style>
