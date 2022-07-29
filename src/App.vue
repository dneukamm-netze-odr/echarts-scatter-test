<template>
  <v-chart :option="chartOptions"></v-chart>
</template>

<script>
import { computed } from "vue";
import { data, labels } from "../data/data.js";

export default {
  setup() {
    const chartOptions = computed(() => ({
      tooltip: {},
      grid: {},
      legend: {},
      dataset: [
        {
          dimensions: ["timestamp", "seconds"],
          source: data,
        },
        ...labels.map((label, idx) => ({
          id: `dataset${idx}`,
          transform: {
            type: "filter",
            config: {
              dimension: "operation",
              eq: label,
            },
          },
        })),
      ],
      series: labels.map((label, idx) => ({
        type: "scatter",
        name: label,
        label,
        dataGroupId: `dataset${idx}`,
        /* dimensions: [{ name: "timestamp", type: "time" }, "seconds"],
        encode: {
          x: "timestamp",
          y: "seconds",
        }, */
      })),
      xAxis: {
        type: "time",
      },
      yAxis: {},
    }));

    return {
      chartOptions,
    };
  },
};
</script>

<style>
x-vue-echarts {
  height: 600px;
}
</style>
