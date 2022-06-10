<template>
  <div class="bg-gray-200 min-h-screen hidden md:block">
    <Navbar />
    <router-view />
  </div>
</template>

        <script>
import Navbar from "../Navbar.vue";

export default {
  components: { Navbar },
};
</script>




























