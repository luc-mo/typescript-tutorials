import type { Lang } from '@/types/lang'
import type { Link } from '@/types/link'

type NavLinks = {
  [key in Lang]: Link[]
}

export const navLinks: NavLinks = {
  es: [
    { text: "Inicio", href: "/es" },
    { text: "Fundamentos", href: "/es/fundamentos/introduccion" },
    { text: "Artículos", href: "/es/articulos" },
  ],
  en: [
    { text: "Home", href: "/en" },
    { text: "Fundamentals", href: "/en/fundamentals/introduction" },
    { text: "Articles", href: "/en/articles" },
  ]
}