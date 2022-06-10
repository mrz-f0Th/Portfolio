<template>
  <div class="bg-gray-200 min-h-screen overflow-hidden hidden md:block">
    <Navbar />
    <router-view />
  </div>

  <div class="md:hidden bg-gray-200 relative">
    <div
      @click="moveUp"
      class="
        cursor-pointer
        fixed
        right-5
        bottom-5
        bg-white
        p-2
        rounded-lg
        bg-opacity-80
      "
      :class="{ hidden: isHidden }"
    >
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </span>
    </div>
    <Navbar />
    <Jumbotron />
    <AboutMe />
    <Porto />
    <Skills />
    <ContactMe />
  </div>
</template>

<script setup>
import Navbar from "../Navbar.vue";
import Jumbotron from "../Jumbotron.vue";
import AboutMe from "../AboutMe.vue";
import Porto from "../Porto.vue";
import Skills from "../Skills.vue";
import ContactMe from "../Contact.vue";

import { ref } from "vue";

const isHidden = ref(true);

window.onscroll = () => {
  const isTop = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 
  isTop ? isHidden.value = false : isHidden.value = true
};

const moveUp = () => {
  window.scrollTo({
    top: "0,0",
    behavior: "smooth",
  });
};
</script>




























