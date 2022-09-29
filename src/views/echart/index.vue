<script setup>
import { ref } from 'vue';

defineProps({
	msg: String,
});

const count = ref(0);
</script>

<template>
	<div class="login">echart</div>
</template>

<style scoped>
.login {
	width: 100%;
}
</style>
