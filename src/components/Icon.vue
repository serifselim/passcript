<template>
  <button>
    <img
      :style="iconStyle"
      :width="width"
      :height="height"
      :src="iconPath"
      alt="icon"
    />
  </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "var(--color-primary)",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    iconPath: {
      type: String,
      require: true,
    },
    width: {
      type: Number,
      default: 150,
    },
    height: {
      type: Number,
      default: 150,
    },
  },

  computed: {
    iconStyle: () => ({
      fill: `${this.color} !important`,
      backgroundColor: this.backgrounsdColor,
    }),
  },
};
</script>
<style scoped>
button {
  background: transparent;
}
</style>
