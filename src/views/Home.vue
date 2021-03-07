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
        <v-row class="middleBox">
          <v-col cols="10">
            <v-row class="textWrapper">
              <v-col cols="12">
                <ul class="text">
                  <li>M</li>
                  <li>Y</li>
                  <li>W</li>
                  <li>O</li>
                  <li>R</li>
                  <li>K</li>
                </ul>
                <div class="line"></div>
                <p>
                  Web & visual Designer
                </p>
              </v-col>
              <v-col>
                <button>
                  <img src="../assets/icons/play.svg" />
                </button>
                MY INTRO
              </v-col>
            </v-row>
          </v-col>
          <v-col class="verticalWrapper">
            <p>
              FOLLOW ME ON:
            </p>
            <hr style=" transform: rotate(90deg);" />
            <div>
              <img src="@/assets/icons/facebook.svg" />
              <img src="@/assets/icons/twitter.svg" />
              <img src="@/assets/icons/linkedin.svg" />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <cards />
  </div>
</template>

<script>
import headerComp from "@/components/main/header.vue";
import cards from "@/components/cards/cards.vue";

export default {
  name: "Home",
  components: { headerComp, cards },
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

  .middleBox {
    .textWrapper {
      margin-left: 10%;
      margin-top: 22%;
      p {
        font-size: 25px;
        margin-right: 25%;
        margin-top: -3%;
      }
      .text {
        display: flex;
      }
      .line {
        position: absolute;
        top: 320px;
        left: 0;
        width: 22vw;
        height: 15px;
        background: $white;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        -webkit-animation: stretch-data-v-fae5bece 3s forwards;
        animation: stretch-data-v-fae5bece 3s forwards;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        z-index: 2;
      }

      li {
        list-style: none;
        color: $mainColor;
        font-size: 100px;
        position: relative;
        z-index: 3;
        &:nth-child(1),
        &:nth-child(2) {
          color: black;
        }
        &:nth-child(2) {
          margin-right: 30px;
        }
        &:nth-child(4) {
          z-index: 1;
        }
      }

      @keyframes stretch {
        to {
          left: 52vw;
        }
      }
      button {
        background-color: $white;
        border: none;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        border-radius: 100%;
        height: 78px;
        width: 78px;
        margin: 0px 1vw 0 9vw;
      }
    }
    .verticalWrapper {
      p {
        transform: rotate(90deg);
        font-size: 13px;
        color: $mainColor;
        margin-top: 24vh;
      }
      hr {
        transform: rotate(90deg);
        width: 3vw;
        margin-top: 12vh;
        margin-left: 3vw;
      }
      div {
        margin-right: 15px;
        img {
          position: absolute;
          margin-top: 5vh;
          &:nth-child(2) {
            margin-top: 10vh;
          }
          &:nth-child(3) {
            margin-top: 15vh;
          }
        }
      }
    }
  }
}
</style>
