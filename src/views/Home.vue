<template>
  <div class="banner">
    <v-carousel id="crous" cycle style="height:100%" hide-delimiter-background>
      <v-carousel-item
        v-for="(item, i) in bgimgs"
        :src="require(`@/assets/${item.src}`)"
        :key="i"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-col>
            <p class="pagehead text-center">{{ item.content }}</p>
            <div class="d-flex justify-center">
              <v-btn
                x-large
                outlined
                height="50px"
                width="120px"
                color="white"
                class="white--text"
                to="/shop"
                >SHOP NOW</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <p class="text-center" id="pagehead">
      100% Fresh Foods
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgimgs: [
        { src: "bg_1.jpg", content: "100% Fresh Foods" },
        { src: "bg_3.jpg", content: "Vegetables & Fruits" },
        { src: "bg_2.jpg", content: "We serve Organic" }
      ]
    };
  }
};
</script>
<style lang="css">
.pagehead {
  font-size: 10vh;
  color: #fff;
  line-height: 1.3;
  font-weight: 200;
  font-family: "Amatic SC", cursive;
}
.banner {
  height: calc(100vh - 50px);
}
.v-carousel__item {
  height: 100% !important;
}
</style>
