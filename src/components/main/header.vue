<template>
  <v-row class="header">
    <v-col cols="3">
      <button>
        DOWNLOAD CV
      </button>
    </v-col>
    <v-col cols="2">
      <button>
        PORTFOLIO
      </button>
    </v-col>
    <v-col cols="3">
      <button>
        ABOUT ME
      </button>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  direction: rtl;
  div {
    button {
      background-color: white;
      border: none;
      font-size: 14px;
      margin-top: 10px;
      padding: 10px 20px;
    }
    &:first-of-type {
      button {
        background-color: rgb(117, 78, 249);
        color: white;
        border-radius: 25px;
      }
    }
  }
}
</style>
