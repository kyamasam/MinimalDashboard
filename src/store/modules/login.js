import api from "@/api";

export const login = {
    state: {
        user: {},
        error:{},
        showSideBar:false,
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getError(state) {
            return state.error
        }
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve, reject)=>{
                api.post('/auth/login/', payload).then(resp=>{
                    commit('setUser', resp.data.user)
                    localStorage.setItem('token', resp.data.token)
                    localStorage.setItem('user', resp.data.user)
                    localStorage.setItem('refresh', resp.data.refreshToken)
                    commit('setError', {})
                    resolve(resp.data)
                }).catch(err=>{
                    commit('setError', {data: err.response.data , status: err.response.status})
                    reject(err)
                })
            })
        }
    },
    mutations: {
        setSideBarView: (state, showSideBar) => (state.showSideBar = showSideBar),
        setUser: (state, user)=>(state.user= user),
        setError: (state, err)=>(state.error = err)
    },

}
