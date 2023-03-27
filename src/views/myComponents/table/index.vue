<script setup lang="ts">
import { ref } from 'vue';
import WTable from '@/components/table/w-table.vue';
const dataSource = [
	{
		id: '1',
		key: '1',
		name: '胡彦斌',
		age: 32,
		address: '西湖区湖底公园1号',
	},
	{
		id: '2',
		key: '2',
		name: '胡彦祖',
		age: 42,
		address: '西湖区湖底公园1号',
	},
];

const columns = [
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name',
		id: 'name',
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age',
		id: 'age',
	},
	{
		title: '住址',
		dataIndex: 'address',
		key: 'address',
		id: 'address',
	},
];
const loading = ref(false);
const pagination = {
	total: 100,
	current: 1,
	pageSize: 10,
};
const handleTableChange = () => {};
</script>

<template>
	<w-table :columns="columns" :data-source="dataSource" :pagination="pagination" :loading="loading" @change="handleTableChange" />
</template>
