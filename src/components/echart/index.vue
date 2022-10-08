<template>
	<div ref="barChart" class="bar-chart">
	</div>
</template>

<script>
import { ref, toRefs, onMounted } from 'vue';
import { echarts } from './chartRequire';

export default {
  setup(props, context) {
		const { options, width } = toRefs(props)
		console.log(options, 'options', width,props, context.attrs);
		const barChart = ref(null)
		// 接下来的使用就跟之前一样，初始化图表，设置配置项
		onMounted(() => {
			console.log(barChart, 'barChart');
			let myChart = echarts.init(barChart.value);
			myChart.setOption({
				title: {
					text: 'ECharts 示例'
				},
				tooltip: {},
				xAxis: {
					data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
				},
				yAxis: {},
				series: [
					{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}
				]
			});
		})
		return {
			barChart
		}
	}
}
</script>

<style lang="less" scoped>
	.bar-chart{
		width: 300px;
		height: 300px
	}
</style>
