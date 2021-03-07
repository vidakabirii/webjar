<template>
  <div>
    <v-row>
      <v-col cols="12">
        <p class="albumHeader">My Portfolio</p>
      </v-col>
      <v-col cols="12">
        <p class="subHead">
          Web & App
        </p>
      </v-col>
    </v-row>
    <v-row class="albumWrapper">
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
    </v-row>
    <v-row class="albumWrapper">
      <v-col cols="8">
        <div class="albumText"></div>
      </v-col>
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
    </v-row>
    <v-row class="albumWrapper">
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
      <v-col cols="4"><img src="@/assets/img/profile.jpg" /> </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.albumHeader {
  font-size: 35px;
  font-weight: bold;
}
.subHead {
  font-size: 18px;
  opacity: 50%;
  margin-top: -10px;
}
.albumWrapper {
  padding: 0% 12%;
  img {
    max-width: 100%;
    width: 352px;
    height: 352px;
  }
  .albumText {
    width: 720px;
    height: 352px;
    background-color: #754ef9;
  }
}
</style>
