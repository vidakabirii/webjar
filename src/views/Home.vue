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
    <album />
    <userCard :users="users" v-if="users.length != 0" />
  </div>
</template>

<script>
import headerComp from "@/components/main/header.vue";
import cards from "@/components/cards/cards.vue";
import album from "@/components/album/album.vue";
import userCard from "@/components/users/users.vue";
import * as dataServices from "@/service/api/api.js";

export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  components: { headerComp, cards, album, userCard },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      dataServices.get().then((res) => {
        this.users = res.data.results.map(function(item) {
          return {
            photo: item.picture.medium,
            fullName:
              item.name.first +
              " " +
              item.name.last +
              ", " +
              item.location.country,
          };
        });
      });
    },
  },
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
    height: 395px;
    width: 395px;
    margin: 70px -78px 26px 62px;
    background-color: $white;
  }
  .photo {
    background-image: url("../assets/img/profile.jpg");
    background-size: cover;
    height: 252px;
    width: 252px;
    border-radius: 100%;
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
      margin-left: 10vw;
      margin-top: 20vh;
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
        top: 270px;
        left: 0;
        width: 28vw;
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
        font-size: 90px;
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
          left: 60vw;
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
        font-size: 11px;
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
@media (min-width: 1130px) {
  .rightBox {
    .middleBox {
      .textWrapper {
        .line {
          width: 22vw;
        }
      }
    }
  }
}
@media (min-width: 1280px) {
  .leftBox {
    .photoWrapper {
      height: 495px;
      width: 495px;
    }
    .photo {
      height: 352px;
      width: 352px;
    }
  }
  .rightBox {
    .middleBox {
      .textWrapper {
        .line {
          width: 20vw;
        }
      }
    }
  }
  @keyframes stretch {
    to {
      left: 57vw;
    }
  }
}
@media (min-height: 700px) {
  .rightBox {
    .middleBox {
      .textWrapper {
        .line {
          top: 296px;
        }
      }
    }
  }
}
@media (min-height: 900px) {
  .rightBox {
    .middleBox {
      .textWrapper {
        .line {
          top: 320px;
        }
      }
    }
  }
}
@media (min-width: 1440px) {
  @keyframes stretch {
    to {
      left: 55vw;
    }
  }
}
</style>
