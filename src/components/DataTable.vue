<template>
  <v-app>
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="desserts"
      item-value="name"
      class="elevation-1"
    ></v-data-table>
  </v-app>
</template>
<script>
import { VDataTable } from "vuetify/labs/VDataTable";
export default {
  components: {
    VDataTable,
  },
  data() {
    return {
      itemsPerPage: 5,
      headers: [
        { title: "Carbs (g)", align: "end", key: "carbs" },
        { title: "Protein (g)", align: "end", key: "protein" },
        { title: "Iron (%)", align: "end", key: "iron" },
      ],
      desserts: [
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        {
          carbs: 24,
          protein: 4.0,
          iron: "1",
        },
        
      ],
    };
  },
};
</script>