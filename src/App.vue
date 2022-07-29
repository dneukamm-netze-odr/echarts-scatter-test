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
      series: labels.map((label) => ({
        type: "scatter",
        name: label,
        label,
        data: data.filter((el) => el.operation === label),
        dimensions: [{ name: "timestamp", type: "time" }, "seconds"],
        encode: {
          x: "timestamp",
          y: "seconds",
        },
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
