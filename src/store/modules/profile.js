import api from "@/api";

export const profile = {
    state: {
        profile: [
        ]
    },
    getters: {
        getProfile(state) {
            return state.profile
        }
    },
    actions: {
        updateProfile({commit}, payload){
            return new Promise((resolve, reject)=>{
                api.post('/auth/update-profile', payload).then(resp=>{
                    commit('setProfile', resp.data)
                    resolve(resp.data)
                }).catch(err=>{
                    commit('setError', {data: err.response.data , status: err.response.status})
                    reject(err)
                })
            })
        },
    },

    mutations: {
        setProfile: (state, profile)=>(state.profile = profile)
    },

}
