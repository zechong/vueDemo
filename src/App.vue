<template>
  <div id="app">
  	<app-header/>
  	<router-view/>
    <app-footer/>
  </div>
</template>

<script>
	
import appHeader from './components/Header.vue'
import appFooter from './components/Footer.vue'

export default {
	components: { appHeader, appFooter }
}

//import Vue from 'vue'
//import Header from './components/Header.vue'
//import Footer from './components/Footer.vue'
//Vue.component('app-header', Header);
//Vue.component('app-footer', Footer);

</script>
