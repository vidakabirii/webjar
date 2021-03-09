<template>
  <v-row class="cardBox">
    <template>
      <v-container>
        <v-row>
          <v-col cols="4" v-for="(item, index) in cardData" :key="index">
            <card
              :icon="item.icon"
              :headline="item.headline"
              :subtitle="item.subtitle"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
  </v-row>
</template>

<script>
import card from "@/components/general/card.vue";
export default {
  data() {
    return {
      cardData: [
        {
          icon: "mdi-camera-timer",
          headline: "On time",
          subtitle: "All i want to have client setisfaction & this is my aim",
        },
        {
          icon: "mdi-square-circle",
          headline: "Clean work",
          subtitle: "All i want to have client setisfaction & this is my aim",
        },
        {
          icon: "mdi-tent",
          headline: "Client setisfaction",
          subtitle: "All i want to have client setisfaction & this is my aim",
        },
      ],
    };
  },
  components: {
    card,
  },
};
</script>

<style scoped lang="scss">
.cardBox {
  padding: 5% 15%;
}
</style>
