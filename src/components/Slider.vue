<template>
  <section
    class="relative w-full mx-auto overflow-hidden h-auto lg:h-[650px] bg-gradient-to-br from-[#3939D0] via-[#3E3CF0] to-[#4A4AE8] rounded-b-3xl shadow-xl">
    
    <div class="hidden lg:block absolute top-[-78px] right-0 w-full h-full pointer-events-none overflow-hidden">
      <img 
        src="../assets/img/backgroundShape.png"
        alt=""
        class="absolute top-0 right-0 w-[687px] h-[636px] object-cover"
      />
    </div>

    <div class="hidden md:block lg:hidden absolute top-0 right-0 w-[501px] h-[464px] pointer-events-none overflow-hidden">
      <img 
        src="../assets/img/backgroundShapeTb.png"
        alt=""
        class="absolute mt-[-150px] -right-10 object-cover opacity-80"
      />
    </div>

    <div class="block md:hidden absolute top-0 right-0 w-[319px] h-[295px] pointer-events-none overflow-hidden">
      <img 
        src="../assets/img/backgroundshapeMb.png"
        alt=""
        class="absolute mt-[-110px] -right-10 object-cover opacity-60"
      />
    </div>

    <div class="hidden lg:flex relative z-10 flex-col lg:flex-row items-center justify-center px-4 pt-0">
      <div class="relative w-full lg:w-1/2 min-h-[514px] lg:min-h-[474px] ml-[178px] flex justify-center lg:justify-start items-end order-1 lg:order-2 pt-8 lg:pt-0">
        <transition name="image-fade" mode="out-in">
          <div :key="currentSlide" class="relative flex items-end justify-center">
            <img
              :src="slides[currentSlide].personaDesktop"
              alt="Persona"
              style="filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.5))"
              class="relative z-20 select-none w-[300px] sm:w-[350px] md:w-[300px] lg:w-[380px] xl:w-[474px] lg:drop-shadow-lg"
            />
            <img
              :src="slides[currentSlide].dispositivoDesktop"
              alt="Dispositivo"
              class="absolute z-30 right-[-50px] bottom-[50px] w-[160px] sm:right-[10px] sm:bottom-[70px] sm:w-[190px] md:left-[150px] md:bottom-[90px] md:w-[220px] lg:left-[180px] lg:bottom-[10px] lg:w-[260px] xl:left-[250px] xl:bottom-[164px] xl:w-[516px] xl:h-[508px] drop-shadow-2xl"
            />
          </div>
        </transition>
      </div>

      <div class="z-20 w-full lg:w-1/2 max-w-2xl h-auto lg:h-full flex flex-col items-center lg:items-start justify-center order-2 lg:order-1 px-4 lg:px-16 py-8">
        <div class="w-full mb-[45px] ml-[155px] overflow-hidden">
          <transition name="slide-fade" mode="out-in">
            <h2 :key="currentSlide" class="font-nunito font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug text-white text-center lg:text-left">
              {{ slides[currentSlide].title }}
              {{ slides[currentSlide].subtitle }}
              <span class="font-extrabold">{{ slides[currentSlide].highlight }}</span>
            </h2>
          </transition>
        </div>

        <div class="w-[470px] mb-7 flex flex-col lg:flex-row h-[56px] mt-[20px] ml-[155px] gap-3">
          <button class="w-[198px] h-[56px] lg:w-auto py-3 px-6 bg-[#32FADD] text-[#1A2B90] text-base font-bold rounded-full shadow transition hover:bg-[#2de8ca]">
            QUIERO CONTRATAR
          </button>
          <button class="w-[198px] h-[56px] lg:w-auto py-3 px-6 bg-transparent hover:bg-white text-white hover:text-[#3939D0] text-base font-bold border border-white rounded-full shadow transition">
            NUESTRAS TARIFAS
          </button>
        </div>

        <div class="w-full h-[56px] mt-[30px] ml-[155px] flex gap-4 items-center justify-center lg:justify-start text-white text-xs sm:text-sm">
          <button @click="prevSlide" class="w-[56px] h-[56px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Anterior">
            <img src="../assets/img/left.png" alt="Anterior" class="w-[56px] h-[56px]" />
          </button>
          <button @click="nextSlide" class="w-[56px] h-[56px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Siguiente">
            <img src="../assets/img/right.png" alt="Siguiente" class="w-[56px] h-[56px]" />
          </button>
          <button @click="toggleAutoplay" class="w-[56px] h-[56px] flex items-center justify-center rounded-full transition" :aria-label="isPlaying ? 'Pausar' : 'Reproducir'">
            <img v-if="isPlaying" src="../assets/img/pause.svg" class="w-[56px] h-[56px]" alt="Pause" />
            <svg v-else class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="lg:hidden md:hidden relative z-10 px-6 py-8">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentSlide" class="w-full flex flex-col">
          <div class="w-full mb-6">
            <div class="flex flex-col items-center justify-center text-center">
              <div class="mb-6 relative">
                <img
                  :src="slides[currentSlide].personaMobile"
                  alt="Persona"
                  style="filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.4))"
                  class="w-[175px] h-[192px]"
                />
                <img
                  :src="slides[currentSlide].dispositivoDesktop"
                  alt="Dispositivo"
                  class="absolute z-30 right-[-50px] bottom-[20px] w-[140px] h-auto drop-shadow-2xl"
                />
              </div>
              
              <h2 class="font-nunito font-light text-2xl leading-snug text-white mb-4">
                {{ slides[currentSlide].title }}<br>
                {{ slides[currentSlide].subtitle }}<br>
                <span class="font-extrabold">{{ slides[currentSlide].highlight }}</span>
              </h2>
            </div>
          </div>

          <div class="w-full flex flex-col gap-3 mb-6">
            <button class="w-full h-[56px] py-3 px-6 bg-[#32FADD] text-[#1A2B90] text-base font-bold rounded-full shadow transition hover:bg-[#2de8ca]">
              QUIERO CONTRATAR
            </button>
            <button class="w-full h-[56px] py-3 px-6 bg-transparent hover:bg-white text-white hover:text-[#3939D0] text-base font-bold border border-white rounded-full shadow transition">
              NUESTRAS TARIFAS
            </button>
          </div>

          <div class="w-full flex gap-4 items-center justify-center">
            <button @click="prevSlide" class="w-[56px] h-[56px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Anterior">
              <img src="../assets/img/left.png" alt="Anterior" class="w-[56px] h-[56px]" />
            </button>
            <button @click="nextSlide" class="w-[56px] h-[56px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Siguiente">
              <img src="../assets/img/right.png" alt="Siguiente" class="w-[56px] h-[56px]" />
            </button>
            <button @click="toggleAutoplay" class="w-[56px] h-[56px] flex items-center justify-center rounded-full transition" :aria-label="isPlaying ? 'Pausar' : 'Reproducir'">
              <img v-if="isPlaying" src="../assets/img/pause.svg" class="w-[56px] h-[56px]" alt="Pause" />
              <svg v-else class="w-4 h-4 ml-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </transition>
    </div>

    <div class="hidden md:flex lg:hidden relative z-10 px-8 py-10">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentSlide" class="w-full flex flex-col">
          <div class="flex flex-row items-center justify-between gap-12 mb-8">
            <div class="flex flex-col flex-1 max-w-[350px]">
              <h2 class="font-nunito font-light text-[28px] leading-tight text-white text-left mb-6">
                {{ slides[currentSlide].title }}<br>
                {{ slides[currentSlide].subtitle }}<br>
                <span class="font-extrabold">{{ slides[currentSlide].highlight }}</span>
              </h2>
              
              <div class="flex flex-col gap-3">
                <button class="w-full h-[50px] py-3 px-5 bg-[#32FADD] text-[#1A2B90] text-sm font-bold rounded-full shadow transition hover:bg-[#2de8ca]">
                  QUIERO CONTRATAR
                </button>
                <button class="w-full h-[50px] py-3 px-5 bg-transparent hover:bg-white text-white hover:text-[#3939D0] text-sm font-bold border border-white rounded-full shadow transition">
                  NUESTRAS TARIFAS
                </button>
              </div>
            </div>

            <div class="flex-shrink-0">
              <img
                :src="slides[currentSlide].tabletImage"
                alt="Persona"
                style="filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.4))"
                class="w-[302px] h-[328px]"
              />
            </div>
          </div>

          <div class="w-full flex gap-4 items-center justify-center">
            <button @click="prevSlide" class="w-[50px] h-[50px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Anterior">
              <img src="../assets/img/left.png" alt="Anterior" class="w-[50px] h-[50px]" />
            </button>
            <button @click="nextSlide" class="w-[50px] h-[50px] bg-[#272962] hover:bg-[#3a3b7a] flex items-center justify-center rounded-full transition" aria-label="Siguiente">
              <img src="../assets/img/right.png" alt="Siguiente" class="w-[50px] h-[50px]" />
            </button>
            <button @click="toggleAutoplay" class="w-[50px] h-[50px] flex items-center justify-center rounded-full transition" :aria-label="isPlaying ? 'Pausar' : 'Reproducir'">
              <img v-if="isPlaying" src="../assets/img/pause.svg" class="w-[50px] h-[50px]" alt="Pause" />
              <svg v-else class="w-4 h-4 ml-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import personaDesktop from "../assets/img/persona1.png";
import personaMobile from "../assets/img/persona-mobile.png";
import tabletImage from "../assets/img/persona-tablet.png";
import dispositivoDesktop from "../assets/img/dispositivo.png";

const currentSlide = ref(0);
const isPlaying = ref(true);
let autoplayInterval = null;

const slides = [
  {
    title: "Hazte cliente empresa del",
    subtitle: "Banco de Chile y",
    highlight: "obtén tu producto a costo $0*",
    personaDesktop: personaDesktop,
    personaMobile: personaMobile,
    tabletImage: tabletImage,
    dispositivoDesktop: dispositivoDesktop,
  },
  {
    title: "Gestiona tu negocio",
    subtitle: "de forma simple y",
    highlight: "sin costos adicionales*",
    personaDesktop: personaDesktop,
    personaMobile: personaMobile,
    tabletImage: tabletImage,
    dispositivoDesktop: dispositivoDesktop,
  },
  {
    title: "Únete a miles de",
    subtitle: "empresas que confían en",
    highlight: "Pago Banco de Chile*",
    personaDesktop: personaDesktop,
    personaMobile: personaMobile,
    tabletImage: tabletImage,
    dispositivoDesktop: dispositivoDesktop,
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