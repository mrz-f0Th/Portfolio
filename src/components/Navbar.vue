<template>
  <section class="pt-5">

        <div class="container max-w-screen-xl mx-auto px-4">
            <!-- Nav -->
            <nav class="flex items-center justify-between mb-16 w-full">
                <img src="../assets/image/navbar-logo.png" alt="Logo" class="w-16 bg-gray-200 md:mr-14">

                <ul class=" flex box-border h-5">
                    <li><router-link to="/" class="mx-5 hover:border-b-2 border-gray-700">Home</router-link></li>
                    <li><router-link to="/aboutme" class="mx-5 hover:border-b-2 border-gray-700">About</router-link></li>
                    <li><router-link to="/porto" class="mx-5 hover:border-b-2 border-gray-700">Porto</router-link></li>
                    <li><router-link to="/skills" class="mx-5 hover:border-b-2 border-gray-700">Skills</router-link></li>
                    <li><router-link to="/contact" class="mx-5 hover:border-b-2 border-gray-700">Contact Us</router-link></li>
                </ul>

                <button
                    class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                    <a href="../../public/cv.jpeg" download>Get my CV</a></button>
            </nav>

            
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>