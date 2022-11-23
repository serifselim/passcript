import { defineStore } from "pinia"

export const useGenerateStore = defineStore("generate", {
  state: () => ({
    password: "",
    passwordLength: 6,
    queries: {
      isNumber: false,
      isLower: false,
      isUpper: false,
      isSymbol: false,
    },
  }),
  getters: {
    getPassword: ({ password }) => password,
    getPasswordLength: ({ passwordLength }) => passwordLength,
    getIsAnyTrueQuery: ({ queries }) => Object.values(queries).find((x) => x),
    getPasswordStrength: ({ queries }) => {
      return Object.values(queries).sort((a, b) => b - a)
    },
  },
  actions: {
    setPasswordLength(length) {
      this.passwordLength = length
    },
    generatePassword() {
      const { isNumber, isLower, isUpper, isSymbol } = this.queries
      let newPassword = ""

      const nums = (isNumber ? "0123456789" : "").split("")
      const lowerChars = (isLower ? "abcdefghijklmnopqrstuvwxyz" : "").split("")
      const upperChars = (isUpper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "").split("")
      const symbols = (isSymbol ? "!'^+%&/()=?_" : "").split("")

      const arr = [...nums, ...lowerChars, ...upperChars, ...symbols]
      let prevIndex = 0

      for (let i = 0; i < arr.length; i++) {
        if (newPassword.length <= this.passwordLength) {
          let nextIndex
          do {
            nextIndex = Math.floor(Math.random() * arr.length)
          } while (prevIndex === nextIndex)

          newPassword += arr[nextIndex]
        }
      }

      this.password = newPassword
    },
  },
})
