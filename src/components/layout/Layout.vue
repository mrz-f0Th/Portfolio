<template>
  <div class="bg-gray-200 min-h-screen overflow-hidden hidden md:block">
    <Navbar />
    <router-view />
  </div>

  <div class="md:hidden bg-gray-200">
    <Navbar />
    <Jumbotron />
    <AboutMe />
    <Porto />
    <Skills />
    <ContactMe />
  </div>
</template>

<script>
import Navbar from "../Navbar.vue";
import Jumbotron from "../Jumbotron.vue"
import AboutMe from "../AboutMe.vue"
import Porto from "../Porto.vue"
import Skills from "../Skills.vue"
import ContactMe from "../Contact.vue"

export default {
  components: { 
      Navbar,
      Jumbotron,
      AboutMe,
      Porto,
      Skills,
      ContactMe
    },
};
</script>




























