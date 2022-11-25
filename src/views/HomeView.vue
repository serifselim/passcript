<template>
  <div class="home">
    <div class="home-context">
      <div class="home-title">
        <h1>
          {{ getCurrentData.home.intro }}
        </h1>
      </div>
      <div class="background">
        <img width="400" src="../assets/background.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "pinia"
import { useLangStore } from "../stores/lang"
export default {
  computed: {
    ...mapState(useLangStore, ["getCurrentData"]),
  },
}
</script>

<style scoped>
.home {
  width: 100%;
}

.home .home-context {
  width: 70%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home .home-context .home-title {
  margin: 140px 0 70px 0;
}
</style>
