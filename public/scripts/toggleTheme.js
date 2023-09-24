import { THEME_ICONS } from './themeConstants.js'

const changeThemeIcon = (img, theme) => {
  img.src = THEME_ICONS[theme]
}

const toggleTheme = async(event) => {
  const { LOCAL_THEME_KEY, DARK_THEME, LIGHT_THEME } = await import('./themeConstants.js')
  const isCurrentDark = document.body.classList.contains(DARK_THEME)
  
  if(isCurrentDark) {
    document.body.classList.replace(DARK_THEME, LIGHT_THEME)
    localStorage.setItem(LOCAL_THEME_KEY, LIGHT_THEME)
    changeThemeIcon(event.target, LIGHT_THEME)
  } else {
    document.body.classList.replace(LIGHT_THEME, DARK_THEME)
    localStorage.setItem(LOCAL_THEME_KEY, DARK_THEME)
    changeThemeIcon(event.target, DARK_THEME)
  }
}

const themeButton = document.getElementById('theme-button')
themeButton.addEventListener('click', toggleTheme)