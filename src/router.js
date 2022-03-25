import CountriesList from "@/views/countries/CountriesList";
import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from './views/utils/PageNotFound'
const routes = [
    { path: '/countries', name:'Countries', component: CountriesList },
    { path: '/:pathMatch(.*)*', name:'PageNotFound', component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router
