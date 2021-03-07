<template>
  <div class="home">
    <v-row class="mainRow">
      <v-col cols="4" class="leftBox">
        <p class="header">Portfolio</p>
        <div class="photoWrapper">
          <div class="photo"></div>
        </div>
        <p class="footer">BE CREATIVE</p>
      </v-col>
      <v-col class="rightBox">
        <headerComp />
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
import headerComp from "@/components/main/header.vue";

export default {
  name: "Home",
  components: { headerComp},
};
</script>

<style scoped lang="scss">
@import "@/assets/css/general.scss";

.home {
  margin-top: 12px;
}
.mainRow {
  background-color: $mainColor;
  height: 830px;
}
.leftBox {
  z-index: 100;
  .header {
    font-size: 35px;
    font-weight: bold;
    color: $white;
  }
  .photoWrapper {
    border: 15px solid $mainColor;
    border-radius: 100%;
    height: 495px;
    width: 495px;
    margin: 70px -78px 26px 62px;
    background-color: $white;
  }
  .photo {
    background-image: url("../assets/img/profile.jpg");
    background-size: cover;
    height: 352px;
    border-radius: 100%;
    width: 352px;
    margin-left: 53px;
    margin-top: 53px;
    border: 20px solid $mainColor;
  }
  .footer {
    font-size: 16px;
    color: $white;
    margin-top: 85px;
  }
}
.rightBox {
  background-color: $white;
  margin-bottom: 10px;

 
}
</style>
