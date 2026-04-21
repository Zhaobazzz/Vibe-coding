import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCourseStore = defineStore('course', () => {
  const completedSections = ref<Set<string>>(new Set())

  function markComplete(id: string) {
    completedSections.value.add(id)
  }

  function isComplete(id: string) {
    return completedSections.value.has(id)
  }

  return { completedSections, markComplete, isComplete }
})
