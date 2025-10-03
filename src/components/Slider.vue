<template>
  <section
    class="relative w-full h-auto lg:h-[700px] bg-gradient-to-br from-[#3939D0] via-[#3E3CF0] to-[#9337E3] rounded-b-3xl shadow-xl overflow-hidden">
    <div
      class="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <div
        class="absolute top-0 right-[-100px] w-[600px] h-[120%] bg-gradient-to-br from-pink-400/60 to-pink-500/70 transform origin-top -rotate-[35deg]">
      </div>

      <div class="absolute bottom-0 right-[-50px] w-[500px] h-[60%] bg-gradient-to-tr from-[#2020A0]/80 to-[#3030C0]/60 transform origin-bottom rotate-[25deg]">
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center justify-center px-4 pt-0 relative z-10">
      <div
        class="relative w-full lg:w-1/2 flex justify-center lg:justify-start items-end min-h-[380px] lg:min-h-[700px] order-1 lg:order-2 lg:pl-0 pt-8 lg:pt-0">
        <transition name="image-fade" mode="out-in">
          <div
            :key="currentSlide"
            class="relative flex items-end justify-center">
            <img
              :src="slides[currentSlide].persona"
              alt="Persona"
              style="filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.5))"
              class="relative z-20 select-none lg:drop-shadow-lg w-[300px] sm:w-[50px] md:w-[300px] lg:w-[380px] xl:w-[600px]"
            />
            <img
              :src="slides[currentSlide].dispositivo"
              alt="Dispositivo"
              class="absolute right-[-50px] bottom-[50px] w-[160px] sm:right-[10px] sm:bottom-[70px] sm:w-[190px] md:left-[150px] md:bottom-[90px] md:w-[220px] lg:left-[180px] lg:right-auto lg:bottom-[10px] lg:w-[260px] xl:left-[350px] xl:bottom-[150px] xl:w-[500px] drop-shadow-5xl z-30"
            />
          </div>
        </transition>
      </div>

      <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center h-auto lg:h-full z-20 max-w-2xl px-4 lg:px-16 py-8 order-2 lg:order-1">
        <div class="overflow-hidden w-full mb-6">
          <transition name="slide-fade" mode="out-in">
            <h2
              :key="currentSlide"
              class="text-white font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug font-nunito text-center lg:text-left">
              {{ slides[currentSlide].title }}
              {{ slides[currentSlide].subtitle }}
              <span class="font-extrabold">
                {{ slides[currentSlide].highlight }}
              </span>
            </h2>
          </transition>
        </div>

        <div class="flex flex-col w-full gap-3 mb-7 lg:flex-row lg:w-auto">
          <button class="bg-[#47f5c9] hover:bg-[#34ddb1] text-[#1A2B90] font-bold w-full lg:w-auto py-3 px-6 rounded-full shadow transition text-base">
            QUIERO CONTRATAR
          </button>
          <button class="border border-white text-white font-bold w-full lg:w-auto py-3 px-6 rounded-full shadow transition text-base hover:bg-white hover:text-[#3939D0]">
            NUESTRAS TARIFAS
          </button>
        </div>

        <div class="flex gap-4 items-center text-white text-xs sm:text-sm justify-center lg:justify-start w-full">
          <button
            @click="prevSlide"
            class="bg-[#272962] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#3a3b7a] transition"
            aria-label="Anterior"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="nextSlide"
            class="bg-[#272962] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#3a3b7a] transition"
            aria-label="Siguiente">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            @click="toggleAutoplay"
            class="bg-[#272962] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#3a3b7a] transition ml-2"
            :aria-label="isPlaying ? 'Pausar' : 'Reproducir'">
            <svg
              v-if="isPlaying"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
            <svg
              v-else
              class="w-4 h-4 ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import persona from "../assets/img/persona.png";
import dispositivo from "../assets/img/dispositivo.png";

const currentSlide = ref(0);
const isPlaying = ref(true);
let autoplayInterval = null;

const slides = [
  {
    title: "Hazte cliente empresa del",
    subtitle: "Banco de Chile y",
    highlight: "obtén tu producto a costo $0*",
    persona: persona,
    dispositivo: dispositivo,
  },
  {
    title: "Gestiona tu negocio",
    subtitle: "de forma simple y",
    highlight: "sin costos adicionales*",
    persona: persona,
    dispositivo: dispositivo,
  },
  {
    title: "Únete a miles de",
    subtitle: "empresas que confían en",
    highlight: "Pago Banco de Chile*",
    persona: persona,
    dispositivo: dispositivo,
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startAutoplay();
  } else {
    stopAutoplay();
  }
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

onMounted(() => {
  if (isPlaying.value) {
    startAutoplay();
  }
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.image-fade-enter-active,
.image-fade-leave-active {
  transition: all 0.6s ease;
}

.image-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.image-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>