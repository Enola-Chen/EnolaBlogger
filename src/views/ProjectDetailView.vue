<template>
  <div class="rounded-2xl border border-mint-100 bg-white/80 p-5 shadow-sm ring-1 ring-mint-100/70 sm:p-8">
    <div class="mb-6">
      <RouterLink
        :to="{ name: 'home', hash: '#projects' }"
        class="link-hover inline-flex items-center text-sm font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="mr-1.5 h-4 w-4"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.22 1.05l-4.25 3.11 4.25 3.11a.75.75 0 11-.88 1.23l-5.5-4a.75.75 0 010-1.23l5.5-4a.75.75 0 011.05.22z"
            clip-rule="evenodd"
          />
        </svg>
        返回作品集列表
      </RouterLink>
    </div>

    <div v-if="project">
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div class="w-full max-w-[9rem] shrink-0 overflow-hidden" :class="project.thumbCard">
          <div class="aspect-video flex items-center justify-center overflow-hidden">
            <img
              v-if="project.thumbImg"
              :src="resolveStaticProjectHref(project.thumbImg)"
              :alt="project.title"
              class="max-h-full w-full object-cover align-middle"
            />
          </div>
        </div>
        <div class="min-w-0 flex-1">
          <h2 class="text-xl font-semibold text-gray-900">{{ project.title }}</h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">{{ project.description }}</p>
          <ul class="mt-4 flex flex-wrap gap-2">
            <li v-for="tag in project.tags" :key="tag">
              <span class="tag flex items-center rounded-full px-3 py-1 text-xs">{{ tag }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="project.detailHref" class="mt-6">
        <a
          :href="resolveStaticProjectHref(project.detailHref)"
          class="link-hover inline-flex items-center text-sm font-semibold"
        >
          開啟專題頁面
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div v-else-if="project.detailRouter" class="mt-6">
        <RouterLink
          class="link-hover inline-flex items-center text-sm font-semibold"
          :to="project.detailRouter"
        >
          前往首頁介紹區塊
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="ml-1 h-4 w-4"
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

    <p v-else class="text-sm text-gray-500">找不到此專案。</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { getProjectBySlug, resolveStaticProjectHref } from '@/data/projects.js';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const project = computed(() => getProjectBySlug(props.slug));
</script>
