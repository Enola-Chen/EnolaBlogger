<template>
  <div>
    <!-- 關於我 -->
    <section
      id="about"
      class="section-fade mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="關於我"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-mint-50/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 class="text-sm font-bold uppercase tracking-widest text-mint-700 lg:sr-only">關於我</h2>
      </div>
      <div class="text-gray-600">
        <p class="mb-4">
          嗨！我是 Ana，一個熱愛技術與設計的 19 歲<span class="text-highlight">資訊工程系學生</span>。
          我專注於打造<span class="text-highlight">美觀、直覺且易用</span>的網頁體驗，
          同時也在探索 AI 與 IoT 結合的無限可能。
        </p>
        <p class="mb-4">
          我的主要專長是<span class="text-highlight">前端開發</span>，熟悉 Vue.js、Tailwind CSS 等現代框架。
          同時，我也有豐富的<span class="text-highlight"> AIoT 專案經驗</span>，
          曾使用 Jetson Nano 開發智慧監測系統，將感測器數據視覺化呈現。
        </p>
        <p class="mb-4">
          除了技術，我也是一個<span class="text-highlight">社群創辦人</span>，
          經營 LINE 社群，設計會員系統與互動機制，
          以系統思維打造活躍的社群生態。
        </p>
        <p>
          閒暇時，我喜歡探索新技術、閱讀技術文章，
          或是設計一些有趣的 Side Project。
          歡迎隨時與我<a href="mailto:chensofia0214@gmail.com" class="link-hover">聯繫</a>！
        </p>
      </div>
    </section>

    <!-- 經歷 -->
    <section
      id="experience"
      class="section-fade mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="經歷"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-mint-50/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 class="text-sm font-bold uppercase tracking-widest text-mint-700 lg:sr-only">經歷</h2>
      </div>
      <div>
        <ol class="space-y-0">
          <li v-for="exp in experiences" :key="exp.date" class="mb-12">
            <component
              :is="exp.fullCardHref ? 'a' : 'div'"
              v-bind="exp.fullCardHref ? { href: exp.fullCardHref } : {}"
              class="exp-card group relative grid gap-4 pb-1 text-left no-underline sm:grid-cols-8 sm:gap-8 md:gap-4 lg:-mx-4 lg:rounded-xl lg:p-4 transition-[box-shadow,background-color] duration-150 hover:bg-mint-50/90 hover:shadow-md hover:ring-2 hover:ring-mint-300/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2"
              :class="exp.fullCardHref ? 'cursor-pointer' : ''"
            >
              <div class="z-10 sm:order-2 sm:col-span-6">
                <header class="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-mint-600">
                  {{ exp.date }}
                </header>
                <h3 class="font-medium leading-snug text-gray-900">
                  <a
                    v-if="!exp.fullCardHref && exp.titleHref"
                    class="exp-title group/link inline-flex items-baseline text-base font-semibold leading-tight text-gray-900 hover:text-mint-600 focus-visible:text-mint-600"
                    :href="exp.titleHref"
                  >
                    <span>{{ exp.title }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 inline-block h-4 w-4 shrink-0 transition-transform text-mint-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <span
                    v-else
                    class="inline-flex items-baseline text-base font-semibold leading-tight text-gray-900 group-hover:text-mint-600"
                  >
                    {{ exp.title }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="ml-1 inline-block h-4 w-4 shrink-0 transition-transform text-mint-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </h3>
                <p class="mt-2 text-sm leading-normal text-gray-500">{{ exp.description }}</p>
                <ul class="mt-3 flex flex-wrap gap-2">
                  <li v-for="tag in exp.tags" :key="tag">
                    <span class="tag flex items-center rounded-full px-3 py-1 text-xs">{{ tag }}</span>
                  </li>
                </ul>
              </div>
              <div class="project-image z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                <div :class="exp.thumbCard">
                  <div class="aspect-video flex items-center justify-center overflow-hidden">
                    <img
                      v-if="exp.thumbImg"
                      :src="resolveStaticProjectHref(exp.thumbImg)"
                      :alt="exp.title"
                      class="max-h-full w-full object-cover align-middle"
                    />
                  </div>
                </div>
              </div>
            </component>
          </li>
        </ol>

        <div class="mt-12">
          <a
            class="link-hover inline-flex items-center leading-tight group"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>查看完整履歷</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- 作品集 -->
    <section
      id="projects"
      class="section-fade mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="作品集"
    >
      <div
        class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-mint-50/90 px-6 py-5 backdrop-blur-md md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
      >
        <h2 class="text-sm font-bold uppercase tracking-widest text-mint-700 lg:sr-only">作品集</h2>
      </div>
      <div>
        <ul class="space-y-0">
          <li v-for="p in projects" :key="p.slug" class="mb-12">
            <component
              :is="projectCardRootIs(p)"
              class="project-card cursor-pointer group relative grid gap-4 pb-1 text-left no-underline transition-[box-shadow,background-color] duration-150 hover:bg-mint-50/90 hover:shadow-md hover:ring-2 hover:ring-mint-300/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:-mx-4 lg:rounded-xl lg:p-4"
              v-bind="projectCardRootBind(p)"
            >
              <div class="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <span
                    class="project-title group/link inline-flex items-baseline text-base font-semibold leading-tight text-gray-900 group-hover:text-mint-600"
                  >
                    <span>{{ p.title }}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="project-arrow ml-1 inline-block h-4 w-4 shrink-0 transition-transform text-mint-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </h3>
                <p class="mt-2 text-sm leading-normal text-gray-500">{{ p.description }}</p>
                <ul class="mt-3 flex flex-wrap gap-2">
                  <li v-for="tag in p.tags" :key="tag">
                    <span class="tag flex items-center rounded-full px-3 py-1 text-xs">{{ tag }}</span>
                  </li>
                </ul>
              </div>
              <div class="project-image z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                <div :class="p.thumbCard">
                  <div class="aspect-video flex items-center justify-center overflow-hidden">
                    <img
                      v-if="p.thumbImg"
                      :src="resolveStaticProjectHref(p.thumbImg)"
                      :alt="p.title"
                      class="max-h-full w-full object-cover align-middle"
                    />
                  </div>
                </div>
              </div>
            </component>
          </li>
        </ul>

        <div class="mt-12">
          <RouterLink class="link-hover inline-flex items-center leading-tight group" :to="{ name: 'works' }">
            <span>查看完整作品集</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              />
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <footer class="max-w-md pb-16 text-sm text-gray-500 sm:pb-0">
      <p>
        使用
        <a
          href="https://code.visualstudio.com/"
          class="font-medium text-mint-600 hover:text-mint-500 hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>
        編寫，以
        <a
          href="https://tailwindcss.com/"
          class="font-medium text-mint-600 hover:text-mint-500 hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        打造，部署於
        <a
          href="https://vercel.com/"
          class="font-medium text-mint-600 hover:text-mint-500 hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        。
      </p>
      <p class="mt-4">© 2026 Ana Chen. 以 💚 打造</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { PROJECTS, resolveStaticProjectHref } from '@/data/projects.js';
import { activePortfolioSection } from '@/stores/activeSection.js';

const projects = PROJECTS;

const fragranceIntroduceHref = resolveStaticProjectHref('fragranceIntroduce.html');
const plantRobotHref = resolveStaticProjectHref('plant-robot.html');

const experiences = [
  {
    date: '2024 — 現在',
    title: '社群創辦人 · LINE 社群',
    description:
      '創立並經營活躍的 LINE 社群，設計會員分級制度、積分系統與自動化流程。規劃線上線下活動，從發想到執行，打造具黏著度的社群生態。',
    tags: ['社群經營', '系統設計', '活動企劃'],
    fullCardHref: null,
    titleHref: '#',
    thumbImg: '',
    thumbCard:
      'rounded-xl overflow-hidden border-2 border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-100 shadow-md',
  },
  {
    date: '2023 — 2024',
    title: '試香系統開發手札',
    description:
      '撰寫試香互動專題的開發手札：從發想、介面與使用者流程，到以 Vue.js 與 Tailwind CSS 實作可探索的試香體驗；以長文整理技術選型與心得，性質接近部落格的專題紀錄。',
    tags: ['Vue.js', 'Tailwind CSS', '專題筆記'],
    fullCardHref: fragranceIntroduceHref,
    thumbImg: '/images/Fragrance/sample.png',
    thumbCard:
      'rounded-xl overflow-hidden border-2 border-rose-200 bg-gradient-to-br from-rose-100 to-fuchsia-100 shadow-md',
  },
  {
    date: '2022 — 2023',
    title: '智慧植栽監測系統',
    description:
      '開發智慧植栽監測系統，結合 Jetson Nano 與各類感測器，建立即時數據監控平台，實現自動化灌溉與環境控制。',
    tags: ['Jetson Nano', 'Python', 'IoT Sensors', 'Flask'],
    fullCardHref: plantRobotHref,
    thumbImg: '/images/plant/hardware.png',
    thumbCard:
      'rounded-xl overflow-hidden border-2 border-mint-200 bg-gradient-to-br from-mint-100 to-mint-200 shadow-md',
  },
];

function projectCardRootIs(p) {
  return p.detailHref ? 'a' : RouterLink;
}

function projectCardRootBind(p) {
  if (p.detailHref) {
    return { href: resolveStaticProjectHref(p.detailHref) };
  }
  return { to: p.detailRouter ?? { name: 'project-detail', params: { slug: p.slug } } };
}

const sectionIds = ['about', 'experience', 'projects'];

let io;
let fadeIo;

onMounted(() => {
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sectionIds.includes(id)) {
            activePortfolioSection.value = id;
          }
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: '0px 0px -55% 0px',
    }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });

  const fades = document.querySelectorAll('#content .section-fade');
  fadeIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    },
    { threshold: 0.1 }
  );
  fades.forEach((el) => fadeIo.observe(el));
});

onUnmounted(() => {
  io?.disconnect();
  fadeIo?.disconnect();
});
</script>
