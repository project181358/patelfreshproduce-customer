<template>
  <div>
    <v-img
      :contain="false"
      min-width="100%"
      src="@/assets/backgroung.jpg"
    ></v-img>
    <p class="text-center" id="pagehead">
      100% Fresh Foods
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css" scoped>
#pagehead {
  position: absolute;
  top: 40%;
  width: 100%;
  font-size: 8vw;
  color: #fff;
  line-height: 1.3;
  font-weight: 200;
  font-family: "Amatic SC", cursive;
}
</style>
