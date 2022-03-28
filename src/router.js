import CountriesList from "@/views/countries/CountriesList";
import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from './views/utils/PageNotFound'
import ViewProfile from "@/views/profile/ViewProfile";
import Login from "@/views/Login";
import CountryBase from "@/views/countries/CountryBase";
import ViewCountry from "@/views/countries/ViewCountry";
import BaseProfile from "@/views/profile/BaseProfile";
const routes = [
    {
        path: '/countries',
        name:'Countries',
        component: CountryBase,
        props:{
          title:'Countries'
        },
        children:[
            {
               path:'',
                name:'CountryList',
                component: CountriesList
            },
            {
                path:'view/:id',
                name:'viewCountry',
                component: ViewCountry
            },
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: BaseProfile,
        props:{
          title:'Profile'
        },
        children: [
            {
                path: ':id',
                name: 'viewProfile',
                component: ViewProfile
            }
        ]
    },
    {path: '/', name:'Login', component: Login},
    { path: '/:pathMatch(.*)*', name:'PageNotFound', component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router
