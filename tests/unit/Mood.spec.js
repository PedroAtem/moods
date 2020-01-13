import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils"
import Mood from "@/components/Mood.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    mood: "neutral"
  },
  getters: {
    getMood: state => state.mood,
  }
})

describe("Mood.vue", () => {
  it("Mood neutral", () => {
    const wrapper = shallowMount(Mood, { store, localVue });
    expect(wrapper.find(".icon-emoji").text()).toBe("mdi-emoticon-neutral")
  });

  it("Click and mood sad", async () => {
    const wrapper = shallowMount(Mood, { store, localVue });
    wrapper.vm.changeMood();
    setTimeout(() => {
      expect(wrapper.find(".icon-emoji").text()).toBe("mdi-emoticon-sad")
    }, 1000);
  });
});
