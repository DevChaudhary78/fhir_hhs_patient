<template>
  <div id="hero">
    <HeaderContainer />
    <MainContainer />
    <FooterContainer />
  </div>
</template>

<script setup lang="ts">
import MainContainer from './components/MainContainer.vue'
import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'
</script>

<style scoped>
#hero {
  height: inherit;
  width: inherit;
}
</style>
