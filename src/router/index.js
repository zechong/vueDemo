import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import process from '@/components/process'
import cases from '@/components/case'
import news from '@/components/news'
import packages from '@/components/packages'
import details from '@/components/details'
import vuexDemo from '@/components/vuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/process',
      name: 'process',
      component: process
    },
    {
      path: '/case',
      name: 'cases',
      component: cases
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/packages',
      name: 'packages',
      component: packages
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/demo',
      name: 'vuexDemo',
      component: vuexDemo
    }
  ]
})