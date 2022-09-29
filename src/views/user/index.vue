<script setup>
import { ref } from 'vue';

defineProps({
	msg: String,
});

const count = ref(0);
</script>

<template>
	<div class="user">user</div>
</template>

<style lang="less" scoped>
.user {
	width: 100%;
}
</style>
