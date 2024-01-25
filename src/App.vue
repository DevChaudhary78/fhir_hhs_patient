<template>
  <div id="hero">
    <HeaderContainer />
    <router-view>
    </router-view>
    <FooterContainer />
  </div>
</template>

<script setup lang="ts">
import HeaderContainer from './components/HeaderContainer.vue'
import FooterContainer from './components/FooterContainer.vue'
</script>

<style scoped>
#hero {
  height: inherit;
  width: inherit;
}
</style>
