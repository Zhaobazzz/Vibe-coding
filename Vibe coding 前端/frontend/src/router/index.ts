import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'Vibe Coding 101', theme: 'light' },
    },
    {
      path: '/process',
      name: 'process',
      component: () => import('@/pages/DevProcessPage.vue'),
      meta: { title: '开发流程与环境（六句指令）', theme: 'dark' },
    },
    {
      path: '/environment',
      name: 'environment',
      redirect: { path: '/process', hash: '#environment-six' },
    },
    {
      path: '/language',
      name: 'language',
      component: () => import('@/pages/LanguageEvolutionPage.vue'),
      meta: { title: '计算机是怎么听代码指挥的？', theme: 'light' },
    },
    {
      path: '/terminal',
      name: 'terminal',
      component: () => import('@/pages/TerminalPage.vue'),
      meta: { title: '认识终端与 Shell', theme: 'light' },
    },
    {
      path: '/frontend-backend',
      name: 'frontend-backend',
      component: () => import('@/pages/FrontendBackendPage.vue'),
      meta: { title: '前后端是怎么协作的', theme: 'light' },
    },
    {
      path: '/fullstack-cheatsheet',
      name: 'fullstack-cheatsheet',
      component: () => import('@/pages/FullstackCheatsheetPage.vue'),
      meta: { title: '全栈上手速查', theme: 'light' },
    },
    {
      path: '/ai-ide',
      name: 'ai-ide',
      component: () => import('@/pages/AiIdeGuidePage.vue'),
      meta: { title: '以 Cursor 和 Coze 为例', theme: 'dark' },
    },
    {
      path: '/ide-practice',
      name: 'ide-practice',
      component: () => import('@/pages/IdeHandsOnPage.vue'),
      meta: { title: '用 Cursor 完成你的个人主页', theme: 'dark' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 8 }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const t = to.meta.title as string | undefined
  if (t) document.title = `${t} · Vibe Coding 101`
})

export default router
