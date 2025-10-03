<template>
  <header
    class="w-full relative
           flex items-center justify-between
           bg-[#1A1E89]
           px-4 tablet:px-6 desktop:px-8 py-3">
    <div class="flex items-center gap-4">
      <img 
        src="../assets/img/logo.png" 
        alt="Pago Banco de Chile" 
        class="h-[21px] w-[163px]"
      />
    </div>

    <nav
      class="hidden tablet:flex
             gap-4 desktop:gap-8
             text-white text-xs tablet:text-sm font-semibold
             opacity-80">
      <a href="#" class="whitespace-nowrap">PRODUCTOS Y TARIFAS</a>
      <a href="#" class="whitespace-nowrap">CÓMO CONTRATAR</a>
      <a href="#" class="whitespace-nowrap">BENEFICIOS</a>
    </nav>

    <button
      class="px-3 tablet:px-4 desktop:px-5 py-2
             bg-[#00DBBC] mt-[8px] mb-[8px] 
             -mr-[50px] tablet:-mr-[10px] desktop:mr-[40px]
             text-[#181B4B] text-xs tablet:text-sm font-bold
             rounded-full whitespace-nowrap">
      <span class="hidden desktop:inline">QUIERO CONTRATAR</span>
      <span class="inline desktop:hidden">CONTRATAR</span>
    </button>

    <button
      class="ml-3 tablet:hidden"
      @click="menuOpen = !menuOpen">
      <img 
        v-if="!menuOpen"
        src="../assets/img/menu.png" 
        alt="Menú"
        class="w-6 h-6"
      />
      <svg 
        v-else
        class="w-6 h-6 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24">
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <transition name="fade">
      <nav
        v-if="menuOpen"
        class="absolute top-full left-0 z-40
               w-full
               flex flex-col items-center
               py-6 gap-6
               bg-[#181B4B]
               text-white text-base font-semibold
               shadow-xl
               tablet:hidden">
        <a href="#" @click="menuOpen = false">PRODUCTOS Y TARIFAS</a>
        <a href="#" @click="menuOpen = false">CÓMO CONTRATAR</a>
        <a href="#" @click="menuOpen = false">BENEFICIOS</a>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>