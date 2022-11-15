<template>
    <div class="min-h-full bg-gray-200 flex">
       <!--    Sidebar-->
      <Sidebar :class="{'-ml-[200px]' : !sideBarOpened}" />
      <!--/    Sidebar-->
      <div class="flex-1">
        <NavBar @toggle-sidebar="toogleSideBar"/>
        <!-- Content -->
        <main class="p-6">
          <router-view></router-view>
        </main>
        <!-- /Content -->
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from "./Sidebar.vue";
import NavBar from "./NavBar.vue";

const sideBarOpened = ref(true);

function toogleSideBar(){
  sideBarOpened.value = !sideBarOpened.value;
}

onMounted(() => {
  handleSideBarOpened();
  window.addEventListener('resize', handleSideBarOpened);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleSideBarOpened)
})

function handleSideBarOpened(){
  sideBarOpened.value = window.outerWidth > 768;
}

</script>

<style scoped>
</style>