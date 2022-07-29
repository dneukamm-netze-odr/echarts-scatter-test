import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
};
