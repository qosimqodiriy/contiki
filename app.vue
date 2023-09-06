<template>
  <NuxtLayout>
    
  </NuxtLayout>
</template>


<script>
export default {
  mounted() {
    this.$i18n.locale = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
  }
}
</script>