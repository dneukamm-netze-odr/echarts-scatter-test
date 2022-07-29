import { createApp } from "vue";

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { ScatterChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import ECharts from "vue-echarts";

import App from "./App.vue";

use([
  CanvasRenderer,
  ScatterChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent,
  TransformComponent,
]);

const app = createApp(App);
app.component("VChart", ECharts);
app.mount("#app");
