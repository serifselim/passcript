import { defineStore } from "pinia"
import CryptoJS from "crypto-js"
import { v4 as uuidv4 } from "uuid"

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    currentUser: null,
  }),
  getters: {
    getCurrentUser: ({ currentUser }) => currentUser,
  },
  actions: {
    logOut() {
      localStorage.removeItem("user")
      this.currentUser = null
    },
    isThereSameUser(username) {
      const activeUser = this.users.find((x) => x.username === username)
      if (activeUser) {
        return true
      } else {
        return false
      }
    },
    setNewUser(user) {
      if (this.isThereSameUser(user.username)) {
        console.log("same")
        return false
      } else {
        const newUser = {
          userId: uuidv4(),
          username: user.username,
          password: this.encryptedPassword(user.password),
        }
        this.users = [...this.users, newUser]
        localStorage.setItem("users", JSON.stringify(this.users))
        return true
      }
    },
    loginUser(user) {
      const activeUser = this.users.find((x) => x.username === user.username)
      if (activeUser) {
        const truePassword = this.decryptedPassword(activeUser.password)
        if (truePassword === user.password) {
          this.currentUser = activeUser
          localStorage.setItem("user", JSON.stringify(this.currentUser))
          return true
        } else {
          return false
        }
      }
    },
    encryptedPassword(password) {
      return CryptoJS.AES.encrypt(
        JSON.stringify(password),
        import.meta.env.VITE_SECRET_KEY
      ).toString()
    },
    decryptedPassword(ciphertext) {
      const bytes = CryptoJS.AES.decrypt(
        ciphertext,
        import.meta.env.VITE_SECRET_KEY
      )
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    },
    autoAuthUser() {
      const user = JSON.parse(localStorage.getItem("user"))
      if (user) {
        const activeUser = this.users.find(
          (x) => x.username === user.username && x.password === user.password
        )
        if (activeUser) {
          this.currentUser = activeUser
        }
      }
    },
    getAllUser() {
      const data = JSON.parse(localStorage.getItem("users"))
      if (data) {
        this.users = data
      }
    },
  },
})
