export const PROJECTS = [
  {
    slug: 'smart-plant-monitoring',
    title: '智慧植栽監測系統',
    description:
      '結合 Jetson Nano 與多種感測器，打造即時監控植物生長環境的 AIoT 系統。支援溫濕度、光照、土壤濕度監測，並提供自動化灌溉功能。',
    tags: ['Vue.js', 'Jetson Nano', 'Flask', 'IoT'],
    thumbImg: '/images/plant/cover.png',
    thumbCard:
      'rounded-xl overflow-hidden border-2 border-mint-200 bg-gradient-to-br from-mint-100 to-mint-200 shadow-md',
    detailHref: 'plant-robot.html',
  },
  {
    slug: 'fragrance-test',
    title: '香水測試',
    description:
      '以沉浸式問答與視覺引導探索香調層次的互動頁面，練習 HTML、Tailwind 與細緻的版面與狀態呈現。',
    tags: ['HTML', 'Tailwind CSS', '互動體驗', 'UI'],
    thumbImg: '/images/Fragrance/realsample.png',
    thumbCard:
      'rounded-xl overflow-hidden border-2 border-rose-200 bg-gradient-to-br from-rose-100 to-fuchsia-100 shadow-md',
    detailHref: 'fragrance/index.html',
  },
  
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Root-relative URL for static HTML in `public/` (works from any router path). */
export function resolveStaticProjectHref(file) {
  if (!file) return '';
  if (/^https?:\/\//i.test(file)) return file;
  const path = file.replace(/^\//, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path}`.replace(/\/{2,}/g, '/');
}
