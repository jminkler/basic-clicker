<template>
  <div class="home">
    <cookie></cookie>
    <grandma></grandma>
    Bake those cookies!
  </div>
</template>

<script>
// @ is an alias to /src
import Cookie from '@/components/Cookie.vue'
import Grandma from '@/components/Grandma.vue'

export default {
  name: 'home',
  components: {
    Cookie, Grandma
  }
}
</script>
