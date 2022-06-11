<template>
  <!-- Skills -->
  <section class="py-10 md:py-0 md:-mt-5">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1
        class="
          font-medium
          text-gray-700 text-3xl
          md:text-4xl md:mb-20 md:text-center
        "
      >
        Skills
      </h1>
      <!-- skilss animation -->
      <div
        class="
          justify-between
          w-full
          h-36
          relative
          overflow-hidden
          hidden
          md:flex
        "
      >
        <img
          class="
            h-36
            mx-16
            animate-[swipe_15s_linear_infinite]
            absolute
            right-[-13rem]
          "
          src="../assets/image/icons/html5.png"
          alt="html"
        />
        <img
          class="
            w-36
            h-36
            mx-16
            animate-[swipe_15s_linear_infinite_3s]
            absolute
            right-[-13rem]
          "
          src="../assets/image/icons/tailwind.png"
          alt="html"
        />
        <img
          class="
            w-36
            h-36
            mx-16
            animate-[swipe_15s_linear_infinite_6s]
            absolute
            right-[-13rem]
          "
          src="../assets/image/icons/bootstrap.svg"
          alt="html"
        />
        <img
          class="
            w-36
            h-36
            mx-16
            animate-[swipe_15s_linear_infinite_9s]
            absolute
            right-[-13rem]
          "
          src="../assets/image/icons/js.png"
          alt="html"
        />
        <img
          class="
            w-36
            h-36
            mx-16
            animate-[swipe_15s_linear_infinite_12s]
            absolute
            right-[-13rem]
          "
          src="../assets/image/icons/nodeJS.png"
          alt="html"
        />
      </div>

      <!-- skills mobile -->
      <div class="grid grid-cols-1 justify-items-center mt-5 md:hidden">
        <div
          class="
            bg-gray-50
            w-10/12
            grid grid-cols-1
            justify-items-center
            px-8
            py-5
            text-center
            rounded-xl
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <h1 class="font-medium text-gray-700 text-xl mb-3">Coding</h1>
          <p class="text-gray-700 text-xs font-medium">
            Javascript, Node JS, HTML5, CSS3, Vue.Js, Tailwind, Bootstrap
          </p>
        </div>

        <div
          class="
            bg-gray-50
            w-10/12
            grid grid-cols-1
            justify-items-center
            px-8
            py-5
            text-center
            rounded-xl
            mt-5
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <h1 class="font-medium text-gray-700 text-xl mb-3">Other</h1>
          <p class="text-gray-700 text-xs font-medium">
            Git, Vim, VScode, Terminal, Adobe Ilustrator, Figma
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </section>

  <!-- Experience -->
  <section class="py-10 md:py-0">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="font-medium text-gray-700 text-3xl md:text-4xl md:mb-5 mb-1">
        Experience
      </h1>

      <p class="font-normal text-gray-500 text-xs md:text-base md:mb-20 mb-5">
        Below is a summary of the places I studied
      </p>

      <div class="flex flex-col lg:flex-row justify-between">
        <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 class="font-medium text-gray-400 text-base uppercase">Company</h6>

          <p class="font-semibold text-gray-600 text-base">
            TokoWeb.co <span class="font-normal text-gray-300">/ Bandung</span>
          </p>
        </div>

        <div class="space-y-8 md:space-y-16 mb-16 md:mb-0">
          <h6 class="font-medium text-gray-400 text-base uppercase">
            Position
          </h6>

          <p class="font-normal text-gray-400 text-base">
            Junior Front-End Developer
          </p>
        </div>

        <div class="space-y-8 md:space-y-16">
          <h6 class="font-medium text-gray-400 text-base uppercase">Year</h6>

          <p class="font-normal text-gray-400 text-base">2021</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>