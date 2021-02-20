import Home from '../layouts/Home.vue'

const home = {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
        {
            path: '/writeArticle',
            name: 'WriteArticle',
            component: () => import('../pages/writeArticle.vue'),
        },
        {
            path: '/pageConfig',
            name: 'PageConfig',
            component: () => import('../pages/pageConfig.vue'),
        },
        {
            path: '/fansDetails',
            name: 'FansDetails',
            component: () => import('../pages/fansDetails.vue'),
        },
        {
            path: '/seeDetails',
            name: 'DeeDetails',
            component: () => import('../pages/seeDetails.vue'),
        },
        {
            path: '/manageBenefit',
            name: 'ManageBenefit',
            component: () => import('../pages/manageBenefit.vue'),
        },
        {
            path: '/messageManagement',
            name: 'MessageManagement',
            component: () => import('../pages/messageManagement.vue'),
        },
    ],
}

export default home
