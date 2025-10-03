<template>
  <header class="w-full flex items-center justify-between bg-[#1A1E89] px-4 tablet:px-6 desktop:px-8 py-3">
    <div class="flex items-center gap-4">
      <span class="text-white font-bold text-lg">
        Pago <span class="text-xs font-normal">de Banco de Chile</span>
      </span>
    </div>
    <nav class="hidden tablet:flex gap-4 desktop:gap-8 text-white text-xs tablet:text-sm font-semibold opacity-80">
      <a href="#" class="whitespace-nowrap">PRODUCTOS Y TARIFAS</a>
      <a href="#" class="whitespace-nowrap">CÓMO CONTRATAR</a>
      <a href="#" class="whitespace-nowrap">BENEFICIOS</a>
    </nav>
    <button class="bg-green-300 hover:bg-green-400 text-[#181B4B] font-bold px-3 tablet:px-4 desktop:px-5 py-2 rounded-full text-xs tablet:text-sm whitespace-nowrap">
      <span class="hidden desktop:inline">QUIERO CONTRATAR</span>
      <span class="inline desktop:hidden">CONTRATAR</span>
    </button>
    <button class="text-white text-2xl tablet:hidden ml-3" @click="menuOpen = !menuOpen">
      <span v-if="!menuOpen">&#9776;</span>
      <span v-else>&times;</span>
    </button>
    <transition name="fade">
      <nav v-if="menuOpen" class="absolute top-full left-0 w-full bg-[#181B4B] flex flex-col items-center py-6 gap-6 text-white text-base font-semibold shadow-xl z-40 tablet:hidden">
        <a href="#">PRODUCTOS Y TARIFAS</a>
        <a href="#">CÓMO CONTRATAR</a>
        <a href="#">BENEFICIOS</a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .3s }
.fade-enter-from, .fade-leave-to { opacity: 0 }
</style>