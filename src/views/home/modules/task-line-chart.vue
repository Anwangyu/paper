<script setup lang="ts">
import { watch } from 'vue';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useEcharts } from '@/hooks/common/echarts';

defineOptions({
  name: 'TaskLineChart'
});

interface Props {
  type?: Api.Dashboard.TaskType;
  modelValue: Api.Dashboard.DashboardLine;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'JOB'
});

const appStore = useAppStore();

const { domRef, updateOptions } = useEcharts(() => ({
  tabIndex: props.type,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [] as string[]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      color: '#f5b386',
      name: $t('common.success'),
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0.25, color: '#f5b386' },
            { offset: 1, color: '#fff' }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [] as number[]
    },
    {
      color: '#40e9c5',
      name: props.type === 'RETRY' ? $t('common.running') : $t('common.fail'),
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0.25, color: '#40e9c5' },
            { offset: 1, color: '#fff' }
          ]
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: [] as number[]
    },
    // 添加默认 series 以防止报错
    { type: 'line', data: [] as number[] },
    { type: 'line', data: [] as number[] }
  ]
}));

const getData = () => {
  updateOptions((opts, factory) => {
    const originOpts = factory();

    // 确保 opts.series 至少有 4 个元素
    while (opts.series.length < 4) {
      opts.series.push({ type: 'line', data: [] });
    }

    opts.series[0].name = originOpts.series[0]?.name || 'Default Name 1';
    opts.series[1].name = originOpts.series[1]?.name || 'Default Name 2';
    opts.series[2].name = originOpts.series[2]?.name || 'Default Name 3';
    opts.series[3].name = originOpts.series[3]?.name || 'Default Name 4';

    opts.xAxis.data = props.modelValue?.dashboardLineResponseDOList?.map(x => x.createDt) || [];
    opts.series[0].data = props.modelValue?.dashboardLineResponseDOList?.map(x =>
      opts.tabIndex === 'RETRY' ? x.successNum : x.success
    ) || [];
    opts.series[1].data = props.modelValue?.dashboardLineResponseDOList?.map(x =>
      opts.tabIndex === 'RETRY' ? x.runningNum : x.fail
    ) || [];
    opts.series[2].data = props.modelValue?.dashboardLineResponseDOList?.map(x =>
      opts.tabIndex === 'RETRY' ? x.maxCountNum : x.stop
    ) || [];
    opts.series[3].data = props.modelValue?.dashboardLineResponseDOList?.map(x =>
      opts.tabIndex === 'RETRY' ? x.suspendNum : x.cancel
    ) || [];
    return opts;
  });
};

watch(
  [() => appStore.locale, props],
  () => {
    getData();
  },
  { immediate: true }
);
</script>

<template>
  <NCard :bordered="false" class="card-wrapper">
    <div ref="domRef" class="h-360px overflow-hidden"></div>
  </NCard>
</template>

<style scoped></style>
