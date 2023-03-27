<template>
	<div class="echart">
		<h2>echart</h2>
		<div>
			<!-- <EChart :options="options" :width="300"> </EChart> -->
		</div>
	</div>
</template>

<script setup>
import EChart from '@/components/echart/index.vue';
// const options = {
// 	title: {
// 		text: 'ECharts 示例',
// 	},
// 	tooltip: {},
// 	xAxis: {
// 		data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
// 	},
// 	yAxis: {},
// 	series: [
// 		{
// 			name: '销量',
// 			type: 'bar',
// 			data: [5, 20, 36, 10, 10, 20],
// 		},
// 	],
// };
</script>

<style lang="less" scoped>
.echart {
	width: 100%;
}
</style>
