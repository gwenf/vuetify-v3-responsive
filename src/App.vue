<template>
  <v-app>
    <v-sheet
      color="white"
      elevation="1"
      height="60"
      width="100%"
    >
      <v-container no-gutters>
        <v-row
          align="center"
          justify="space-between"
        >
          <v-col sm="2">
            <div>
              Awesome Shop
            </div>
          </v-col>
          <v-col sm="3">
            <div>
              <v-btn
                elevation="2"
              >
                Home
              </v-btn>
              <v-btn
                elevation="2"
                class="ml-1"
              >
                Store
              </v-btn>
              <v-btn
                elevation="2"
                class="ml-1"
              >
                Cart
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <v-main>
      <MainHeader />
      <PopularProducts />
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import PopularProducts from './components/PopularProducts.vue'

export default {
  name: 'App',

  components: {
    MainHeader,
    PopularProducts
  },

  data: () => ({
    //
  })
}
</script>
