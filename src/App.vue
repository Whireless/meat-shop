<script>
  import mainHeader from './components/mainHeader.vue';
  import intro from './components/intro.vue';
  import advantages from './components/advantages.vue';
  import products from './components/products.vue';
  import mainFooter from './components/mainFooter.vue';

  export default {
    components: {
      mainHeader,
      intro,
      advantages,
      products,
      mainFooter,
    },
  }
</script>

<template>
  <main-header></main-header>
  <intro></intro>
  <advantages></advantages>
  <products></products>
  <main-footer></main-footer>
</template>