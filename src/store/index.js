import {createStore} from "vuex";
import {countries} from '@/store/modules/countries'

const store = createStore({
    modules: {
        countries
    }
});

export default store