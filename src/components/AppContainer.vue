<template>
    <div class="full">
        <h1> Container </h1>
        <Navigation> </Navigation>
         <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '@/components/Navigation'
    import nav from '../_nav'
    
    export default {
        name: 'full',
        components: {
            Navigation,
          
        },
        data () {
            return {
          //  nav: nav.items
            }
        },
        computed: {
            name () {
            return this.$route.name
            },
            list () {
            return this.$route.matched
            }
        }
}
</script>
</script>