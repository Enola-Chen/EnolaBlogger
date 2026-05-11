<template>
  <div class="max-w-lg">
    <RouterLink class="link-hover mb-6 inline-flex items-center text-sm font-semibold" :to="{ name: 'home', hash: '#projects' }">
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
      回首頁 · 作品集
    </RouterLink>
    <h2 class="text-2xl font-bold text-gray-900">作品集總览</h2>
    <p class="mt-4 text-gray-600 leading-relaxed">
      此地可將原
      <code class="rounded bg-mint-100 px-1.5 py-0.5 text-sm text-mint-900">projects.html</code>
      全文遷移為 Vue Router 路由；目前為佔位頁。
    </p>
    <p class="mt-3 text-sm text-gray-500">路由：<span class="font-mono text-mint-800">/works</span></p>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
