<template>
	<div ref="chart" class="chart">
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { echarts } from './chartRequire';

const props = defineProps ({
  options: {
    type: Object
  },
	width: {
		type: Number
	}
})
const initOptions = {
	title: {},
	tooltip: {},
	xAxis: {},
	yAxis: {},
	series: []
}
const options = Object.assign(initOptions, props.options);
const chart = ref(null)
// 接下来的使用就跟之前一样，初始化图表，设置配置项
onMounted(() => {
	let myChart = echarts.init(chart.value);
	myChart.setOption(options);
})
</script>

<style lang="less" scoped>
.chart{
	width: 300px;
	height: 300px
}
</style>
