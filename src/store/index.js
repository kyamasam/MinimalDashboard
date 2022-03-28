import {createStore} from "vuex";
import {countries} from '@/store/modules/countries'
import {login} from '@/store/modules/login'
import {profile} from '@/store/modules/profile'

const store = createStore({
    modules: {
        countries,
        login, profile
    }
});

export default store