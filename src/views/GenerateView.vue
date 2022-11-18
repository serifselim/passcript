<template>
  <div>
    <icon :iconPath="copyIcon" />
    {{ password }}
  </div>
</template>
<script>
//Components
import Icon from "../components/Icon.vue";

// Pinia
import { mapState } from "pinia";
import { usePasswordStore } from "../stores/password";
// Assets
import copyIcon from "../assets/copy.svg";

export default {
  data: () => ({
    copyIcon,
  }),
  computed: {
    ...mapState(usePasswordStore, ["password"]),
  },
  components: {
    Icon,
  },
};
</script>
<style></style>
