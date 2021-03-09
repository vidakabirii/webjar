<template>
  <div class="sliderWrapper">
    <div class="slider">
      <v-carousel height="430" :show-arrows="false">
        <v-carousel-item v-for="(user, i) in userData" :key="i">
          <v-card class="card">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  <div class="photoWrapper">
                    <img :src="user.photo" />
                  </div>
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ user.fullName }}
                </v-list-item-title>
                <v-list-item-subtitle class="subtitle">
                  Writing paragraphs takes practice, but what should students
                  write about? Good paragraph writing prompts allow students to
                  write about what they know and like, so their focus can be on
                  the writing process and using the four essential elements.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users"],
  data() {
    return {
      userData: [],
    };
  },
  mounted() {
    this.userData = this.users;
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/general.scss";

.sliderWrapper {
  text-align: center;
  text-align: -webkit-center;
  margin-top: 30px;
  .slider {
    width: 820px;
    height: 322px;
    background-color: $mainColor;
    .card {
      width: 775px;
      height: 340px;
      background-color: $white;
      padding: 20px 80px;
      .photoWrapper {
        background-color: $mainColor;
        border: 10px solid $secondColor;
        border-radius: 100%;
        height: 130px;
        width: 130px;
        padding: 7px;
        img {
          width: 96px;
          height: 96px;
          border-radius: 100%;
        }
      }
      .headline {
        color: $black;
        margin: 20px;
      }
      .subtitle {
        color: $black;
        opacity: 0.5;
        line-height: 1.8;
        height: 10vh;
        // overflow: scroll;
      }
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/css/general.scss";

.theme--dark.v-btn.v-btn--icon {
  color: $mainColor !important;
}
.v-carousel__controls {
  background: none !important;
}
</style>
