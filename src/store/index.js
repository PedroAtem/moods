import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mood: "neutral",
    joke: "",
    improvingProgress: 0,
    improvingMood: "sad"
  },
  getters: {
    getMood: state => state.mood,
    getImprovingProgress: state => state.improvingProgress,
    getImprovingMood: state => state.improvingMood,
    getJoke: state => state.joke
  },
  mutations: {
    changeMood(state) {
      if (state.mood === "neutral") {
        state.mood = "sad";
      } else if (state.mood === "sad") {
        state.mood = "improving";
      } else if (state.mood === "improving") {
        state.improvingMood = "sad";
        state.improvingProgress = 0;
        state.mood = "neutral";
        state.joke = "";
      }
    },
    readJoke(state, payload) {
      state.joke = payload.joke;
      if (state.improvingProgress < 100) {
        state.improvingProgress += 10;
        if (state.improvingProgress < 30) {
          state.improvingMood = "sad";
        } else if (
          state.improvingProgress >= 30 &&
          state.improvingProgress < 70
        ) {
          state.improvingMood = "neutral";
        } else if (
          state.improvingProgress >= 70 &&
          state.improvingProgress < 100
        ) {
          state.improvingMood = "happy";
        } else if (state.improvingProgress >= 100) {
          state.improvingMood = "lol";
        }
      }
    }
  },
  actions: {
    async readJoke({ commit }) {
      const response = await fetch(
        "https://geek-jokes.sameerkumar.website/api"
      );
      const joke = await response.text();
      commit("readJoke", { joke });
      return;
    }
  },
  modules: {}
});
