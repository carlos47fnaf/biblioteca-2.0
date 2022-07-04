<script setup>
import HeaderComp from "@/components/template/HeaderComp.vue";
import FooterComp from "@/components/template/FooterComp.vue";
import SectionComp from "@/components/template/SectionComp.vue";
</script>
<template>
  <HeaderComp />
  <SectionComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/style.css";

#app {
  max-width: auto;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  font-weight: normal;
  color: black;
}

header {
  background-color: black;
  color: white;
  height: 5%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

footer {
  background-color: black;
  color: white;
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}
</style>
