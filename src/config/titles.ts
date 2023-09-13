import type { Lang } from '@/types/lang';

type Titles = {
  [key in Lang]: string
}

export const titles: Titles = {
  es: "Tutoriales de TypeScript",
  en: "TypeScript Tutorials"
}