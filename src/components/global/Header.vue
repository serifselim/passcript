<template>
  <header class="header">
    <div class="header-context">
      <div @click="handleClick" class="header-context-logo">
        <h2>Pas<span>script</span></h2>
      </div>

      <nav>
        <ul>
          <li>
            <router-link to="/login">
              {{ getCurrentData.header.login }}
            </router-link>
          </li>
          <li>
            <router-link to="/register">
              {{ getCurrentData.header.register }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header-context-lang">
        <button @click="switchLang">
          {{ getCurrentLang.split("-")[1] }}
        </button>
      </div>
    </div>
  </header>
</template>
<script>
//Pinia
import { mapState, mapActions } from "pinia"
import { useLangStore } from "../../stores/lang"
export default {
  name: "HeaderVue",
  computed: {
    ...mapState(useLangStore, ["getCurrentLang", "getCurrentData"]),
  },
  methods: {
    handleClick() {
      this.$router.push("/")
    },
    ...mapActions(useLangStore, ["switchLang", "getLangFromLS"]),
  },
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 70px;
  background: var(--color-gray);
}
.header .header-context {
  width: 70%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: end;
}

.header .header-context .header-context-logo {
  margin: 0 auto 0 20px;
  cursor: pointer;
}
.header .header-context .header-context-logo h2 {
  font-size: 25px;
  font-weight: bold;
  color: white;
}

.header .header-context .header-context-logo h2 span {
  color: var(--color-primary);
}

.header .header-context nav {
  margin-right: 40px;
}

.header .header-context nav ul {
  display: flex;
  column-gap: 25px;
}
.header .header-context nav ul li a {
  font-size: 18px;
  color: white;
  transition: color 0.3s ease;
}

.header .header-context nav ul li a:hover {
  color: var(--color-primary);
}

.header .header-context .header-context-lang button {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: bold;
  color: var(--color-dark);
  border-radius: 30px;
  cursor: pointer;
}

.header .header-context .header-context-lang button:hover {
  opacity: 0.8;
}
</style>
