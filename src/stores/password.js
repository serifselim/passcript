import { defineStore } from "pinia"
import { useUserStore } from "./user"

export const usePasswordStore = defineStore("password", {
  state: () => ({
    passwordArr: [],
  }),
  getters: {
    getPasswordArr: (state) => state.passwordArr,
  },
  actions: {
    getAllPassword() {
      const { currentUser } = useUserStore()
      const data = JSON.parse(localStorage.getItem("passwordArr"))
      if (data) {
        this.passwordArr = data.filter((x) => x.userId === currentUser.userId)
      }
    },
    addNewPasswordToList(payload) {
      const { encryptedPassword, currentUser } = useUserStore()
      const pass = {
        name: payload.name,
        password: encryptedPassword(payload.password, payload.secretKey),
        userId: currentUser.userId,
      }

      this.passwordArr = [...this.passwordArr, pass]
      localStorage.setItem("passwordArr", JSON.stringify(this.passwordArr))
    },
    convertHashToPassword(payload) {
      const { decryptedPassword } = useUserStore()
      const pass = decryptedPassword(payload.password, payload.secretKey)

      if (pass) {
        this.passwordArr[payload.i].password = pass
        return true
      } else {
        return false
      }
    },
  },
})
