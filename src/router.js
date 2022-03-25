import CountriesList from "@/views/countries/CountriesList";
import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from './views/utils/PageNotFound'
import EditCountry from "@/views/countries/EditCountry";
import ViewProfile from "@/views/profile/ViewProfile";
import EditProfile from "@/views/profile/EditProfile";
import Login from "@/views/Login";
const routes = [
    {
        path: '/countries',
        name:'Countries',
        component: CountriesList,
        props:{
          title:'Countries'
        },
        children:[
            {
                path:'edit/:id',
                name:'editCountry',
                component: EditCountry
            },
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ViewProfile,
        props:{
          title:'Profile'
        },
        children: [
            {
                path: 'edit/:id',
                name: 'editProfile',
                component: EditProfile
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
