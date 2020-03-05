<template>
  
  <div>
    {{userList}} // {{fetchTest}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {

    }
  },
  asyncData(context) {
    console.log('context 어떻게 넘어올까',context)
    console.log('process', process)
  },
  fetch({store}) {
    const data = 'fetch 데이터임'
    console.log(store)

    store.commit('user/TEST_DATA', data)
  },
  computed: {
    ...mapState('user',['userList','fetchTest'])
  },
}
</script>

<style>

</style>
