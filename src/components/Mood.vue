<template>
  <div class="mood-content" @click="changeMood">
    <v-icon size="400" class="icon-emoji">mdi-emoticon-{{ $store.getters.getMood }}</v-icon>
  </div>
</template>

<script>
export default {
  name: "mood",
  methods: {
    changeMood: function() {
      this.$store.commit("changeMood");
      if (this.$store.getters.getMood === "sad") {
        this.$router.push({ name: "sadMood" });
      } else if (this.$store.getters.getMood === "improving") {
        this.$router.push({ name: "improvingMood" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mood-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
</style>
