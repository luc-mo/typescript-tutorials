import { LOCAL_THEME_KEY, MEDIA_DARK_THEME, DARK_THEME, LIGHT_THEME } from './themeConstants.js'

const currentTheme = localStorage.getItem(LOCAL_THEME_KEY);
const prefferedDark = window.matchMedia(MEDIA_DARK_THEME);

if(currentTheme) {
  document.body.classList.toggle(DARK_THEME, currentTheme === DARK_THEME);
  document.body.classList.toggle(LIGHT_THEME, currentTheme === LIGHT_THEME);
} else if (prefferedDark.matches) {
  document.body.classList.add(DARK_THEME);
} else {
  document.body.classList.add(LIGHT_THEME);
}