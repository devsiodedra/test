<style>

</style>

<template>
  <div id="app-layout">
      <router-link to="/about"> About </router-link>
      <router-link to="/contact"> Contact </router-link>
      
       
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      nav: 'This is nav'
    }
  }
}
</script>