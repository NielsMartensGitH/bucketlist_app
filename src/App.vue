<template>
  <the-header title="My Bucketlist"></the-header>
  <the-bucket-list></the-bucket-list>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
import TheBucketList from './components/main_components/TheBucketList.vue';

export default {
  components: {
    TheHeader,
    TheBucketList
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      font-family: 'Inter', sans-serif;
  }

</style>
