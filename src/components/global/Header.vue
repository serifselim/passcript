<template>
  <header class="header">
    <div class="header-context">
      <div @click="handleClick" class="header-context-logo">
        <h2>Pas<span>script</span></h2>
      </div>

      <nav>
        <ul v-if="!getCurrentUser">
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

        <ul v-else>
          <li>
            <router-link to="/list">
              {{ getCurrentData.header.list }}
            </router-link>
          </li>
          <li>
            <router-link to="/generate">
              {{ getCurrentData.header.generate }}
            </router-link>
          </li>
          <li>
            <a @click="handleLogOut">
              {{ getCurrentData.header.logOut }}
            </a>
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
import { useUserStore } from "../../stores/user"
export default {
  name: "HeaderVue",
  computed: {
    ...mapState(useLangStore, ["getCurrentLang", "getCurrentData"]),
    ...mapState(useUserStore, ["getCurrentUser"]),
  },
  methods: {
    handleClick() {
      this.$router.push("/")
    },
    handleLogOut() {
      this.logOut()
      this.$router.push("/login")
    },
    ...mapActions(useLangStore, ["switchLang", "getLangFromLS"]),
    ...mapActions(useUserStore, ["logOut"]),
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
  font-family: "M PLUS 1 Code", sans-serif;
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
  cursor: pointer;
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
