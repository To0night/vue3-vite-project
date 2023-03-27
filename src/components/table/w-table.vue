<script setup lang="ts">
import { ref, reactive } from 'vue';
const props = defineProps({
	columns: {
		type: Array,
		default: () => [],
	},
	dataSource: {
		type: Array,
		default: () => [],
	},
	pagination: {
		type: Object,
		default: () => ({
			total: 100,
			current: 1,
			pageSize: 10,
		}),
	},
});
const { dataSource, columns, pagination } = reactive(props);
/* 
  ! 1232
	? 1232
	// 21312
*/
</script>

<template>
	<a-table :columns="columns" :row-key="(record:any) => record.id" :data-source="dataSource" :pagination="pagination" v-bind="$attrs">
		<div v-for="(column, index) of columns" :key="column.key">
			<a-table-column :key="column.key" :data-index="column.dataIndex">
				<template #title>
					<span style="color: #1890ff">{{ column.title }}</span>
				</template>
				<template #default="{ text: value }">
					<span>{{ value }}</span>
				</template>
			</a-table-column>
		</div>
	</a-table>
</template>
