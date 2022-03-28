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
        },
        getSideBarState(state){
            return state.showSideBar
        }
    },
    actions: {
        login({commit}, payload){
            return new Promise((resolve, reject)=>{
                api.post('/auth/login/', payload).then(resp=>{
                    commit('setUser', resp.data.user)
                    console.log("rk", resp.data.data.token)
                    localStorage.setItem('token', resp.data.data.token)
                    localStorage.setItem('username', resp.data.data.user.username)
                    localStorage.setItem('user_id', resp.data.data.user.id)
                    localStorage.setItem('firstName', resp.data.data.user.firstName)
                    localStorage.setItem('lastName', resp.data.data.user.lastName)
                    localStorage.setItem('dateOfBirth', resp.data.data.user.dateOfBirth)
                    localStorage.setItem('avatar', resp.data.data.user.avatar)
                    localStorage.setItem('refresh', resp.data.data.refreshToken)
                    localStorage.setItem('permissions', resp.data.data.user.permissions.toString())
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
