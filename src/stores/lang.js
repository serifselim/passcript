import { defineStore } from "pinia";
import tr_TR from "../langs/tr_TR.json";
import en_EN from "../langs/en_EN.json";

export const useLangStore = defineStore("lang", {
  state: () => ({
    currentLang: "en-EN",
    currentData: en_EN,
  }),
  getters: {
    getCurrentLang: (state) => state.currentLang,
    getCurrentData: (state) => state.currentData,
  },
  actions: {
    switchLang() {
      this.currentLang = this.currentLang === "en-EN" ? "tr-TR" : "en-EN";
      this.currentData = this.switchData();
      this.setLangToLS();
    },
    switchData() {
      return this.currentLang === "en-EN" ? en_EN : tr_TR;
    },
    setLangToLS() {
      localStorage.setItem("lang", this.currentLang);
    },
    getLangFromLS() {
      const data = localStorage.getItem("lang");
      if (data) {
        this.currentLang = data;
        this.currentData = this.switchData();
        console.log(this.currentData);
      }
    },
  },
});
