<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title primary-title>
          Help me! Read me a joke
          <v-spacer></v-spacer>
          <v-btn
            icon
            :disabled="$store.getters.getImprovingMood !== 'lol'"
            @click="closeModal"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <div class="emoticon">
          <v-icon size="200" class="icon-emoji"
            >mdi-emoticon-{{ $store.getters.getImprovingMood }}</v-icon
          >
        </div>

        <v-card-text>
          {{ $store.getters.getJoke }}
        </v-card-text>

        <v-progress-linear
          :value="$store.getters.getImprovingProgress"
        ></v-progress-linear>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="readJoke" :disabled="readingJoke">
            <span v-if="!readingJoke">Read joke</span>
            <span v-if="readingJoke">Reading joke</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      readingJoke: false
    };
  },
  created: function() {
    this.readJoke();
  },
  methods: {
    readJoke: function() {
      this.readingJoke = true;
      this.$store.dispatch("readJoke").then(() => {
        this.readingJoke = false;
      });
    },
    closeModal: function() {
      this.$store.commit("changeMood");
      this.$router.push({ name: "mood" });
    }
  }
};
</script>

<style lang="scss" scoped>
.emoticon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
