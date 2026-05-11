<template>
  <div>
    <div class="spotlight" aria-hidden="true" />

    <div class="floating-shape -right-40 -top-20 h-96 w-96 bg-mint-200" style="animation-delay: 0s" />
    <div class="floating-shape left-10 top-2/3 h-72 w-72 bg-amber-100/80" style="animation-delay: 8s" />
    <div class="floating-shape -left-32 top-1/4 h-80 w-80 bg-amber-100" style="animation-delay: 5s" />
    <div class="floating-shape bottom-20 right-1/4 h-64 w-64 bg-mint-100" style="animation-delay: 10s" />

    <div class="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div class="lg:flex lg:justify-between lg:gap-4">
        <header
          class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:pr-12"
        >
          <div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <RouterLink to="/" class="transition-colors hover:text-mint-600">Ana Chen</RouterLink>
              </h1>
              <h2 class="mt-3 text-lg font-medium tracking-tight text-mint-600 sm:text-xl">
                前端工程師 & AIoT 探索者
              </h2>
              <p class="mt-4 max-w-xs leading-normal text-gray-500">
                19 歲資工系學生，熱愛創造美觀且實用的網頁體驗，探索 AI 與 IoT 交織的未來科技世界。
              </p>
            </div>

            <nav class="nav mt-16 hidden lg:block" aria-label="頁面內導航">
              <ul class="w-max">
                <li>
                  <RouterLink
                    class="nav-link group flex items-center py-3"
                    :class="{ active: isHome && activePortfolioSection === 'about' }"
                    :to="{ name: 'home', hash: '#about' }"
                  >
                    <span class="nav-indicator mr-4" />
                    <span
                      class="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-mint-600"
                    >
                      關於我
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="nav-link group flex items-center py-3"
                    :class="{ active: isHome && activePortfolioSection === 'experience' }"
                    :to="{ name: 'home', hash: '#experience' }"
                  >
                    <span class="nav-indicator mr-4" />
                    <span
                      class="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-mint-600"
                    >
                      經歷
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    class="nav-link group flex items-center py-3"
                    :class="{ active: isHome && activePortfolioSection === 'projects' }"
                    :to="{ name: 'home', hash: '#projects' }"
                  >
                    <span class="nav-indicator mr-4" />
                    <span
                      class="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-mint-600"
                    >
                      作品集
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>

          <ul class="ml-1 mt-8 flex items-center gap-5" aria-label="社群連結">
            <li>
              <a
                class="social-link block"
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6">
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                class="social-link block"
                href="https://medium.com/@chensofia0214"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                  <path
                    d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a class="social-link block" href="mailto:chensofia0214@gmail.com" aria-label="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </header>

        <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { activePortfolioSection } from '@/stores/activeSection.js';

const route = useRoute();
const isHome = computed(() => route.name === 'home');

function onMouseMove(e) {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove);
});
</script>
