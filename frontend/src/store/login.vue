<script>
  import http from '@/components/request.js'
  export default {
    state: {
      userInfo: {phone: '', password: '', status: ''}
    },
    mutations: {
      login (state, payload) {
        state.userInfo.phone = payload.phone
        state.userInfo.password= payload.password
        state.userInfo.status= payload.status
      }
    },
    actions: {
      login ({commit}, info) {
        return http.post('login/index', info).then((res) => {
          if (res.data && res.data.status === 20) {
            commit('login', res.data.content)
          }
          return res
      })
      }
    }
  }
</script>
