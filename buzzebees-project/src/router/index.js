import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import Gallery from '../views/Gallery.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Profile
		},
		{
			path: '/gallery',
			component: Gallery
		},
	],
})

export default router