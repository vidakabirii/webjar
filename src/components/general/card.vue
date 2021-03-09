<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          <v-icon>
            {{ icon }}
          </v-icon>
        </div>
        <v-list-item-title class="headline mb-1">
          {{ headline }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions class="actionBox">
      <v-btn outlined rounded text>
        {{ actionsBtn }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "header",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
    actionsBtn: {
      type: String,
      default: "Learn more",
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/general.scss";
.v-icon {
  font-size: 55px !important;
  color: $mainColor !important;
}
.v-card {
  height: 400px !important;
  padding: 50px !important;
  box-shadow: 0 10px 30px rgb(0 0 0 / 18%);
}
.overline {
  margin-bottom: 50px !important;
}
.v-list-item .v-list-item__subtitle {
  line-height: 1.5 !important;
}
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 30px !important;
}
.theme--light.v-list-item .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: rgba(0, 0, 0, 0.4) !important;
}
.actionBox {
  margin-top: 30%;
  place-content: center;
  button {
    background-color: $mainColor;
    color: $white;
    font-size: 11px;
    border-radius: 0;
    padding: 0 10px;
  }
}
</style>
