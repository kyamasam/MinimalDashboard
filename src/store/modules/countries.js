import api from "@/api";

export const countries = {
    state: {
        countries: [
        ]
    },
    getters: {
        getCountries(state) {
            return state.countries
        }
    },
    actions: {
        fetchCountries({commit}, payload){
            return new Promise((resolve, reject)=>{
                console.log("pay", payload ===undefined ? 'payload' : '' )
                let relative_url = '/auth/countries'
                if (payload !==undefined){
                    relative_url+=`/${payload}`
                }
                console.log("rela", relative_url)
                api.get(relative_url).then(resp=>{
                    this.countries = resp.data
                    resolve(resp.data)
                    commit('setCountries', countries)
                }).catch(err=>{
                    commit('setError', {data: err.response.data , status: err.response.status})
                    reject(err)
                })
            })
        }
    },

    mutations: {
        setCountries: (state, countries)=>(state.countries = countries)
    },

}
