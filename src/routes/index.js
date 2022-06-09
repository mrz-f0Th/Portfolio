import { createWebHistory, createRouter } from "vue-router";

import Layout from '../components/layout/Layout.vue'

import Jumbotron from '../components/Jumbotron.vue'
import AboutMe from '../components/AboutMe.vue'
import Porto from '../components/Porto.vue'
import Skills from '../components/Skills.vue'
import Contact from '../components/Contact.vue'


const routes = [{
    path: '/',
    name: 'Home',
    component: Layout,
    children: [{
        path: '',
        name: 'Jumbotron',
        component: Jumbotron
    },
    {
        path: '/aboutme',
        name: 'AboutMe',
        component: AboutMe 
    },
    {
        path: '/porto',
        name: 'Porto',
        component: Porto 
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Skills 
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact 
    }
]
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'border-b-4 border-gray-700 hover:border-b-4'
})

export default router;