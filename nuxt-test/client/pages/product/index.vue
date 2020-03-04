<template>
  
  <div>
    {{userList}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState('user',['userList'])
  },
}
</script>

<style>

</style>
