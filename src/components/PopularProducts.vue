<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Popular Products</h2>
        <router-link to="/">view all</router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in [...Array(4).keys()]" :key="i">
        <v-sheet width="250" height="350" elevation="2">
          Item #1
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
