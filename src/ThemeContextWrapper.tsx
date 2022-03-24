import { createContext, useState } from 'react';

export const themes = {
  dark: {
    type: 'dark',
    background: 'rgb(40, 40, 40)',
    listBackground: 'rgb(45, 45, 45)',
    color: 'rgb(220, 220, 220)',
    hoverColor: 'rgb(50, 50, 50)',
    listHoverColor: 'rgb(70, 70, 70)',
    borderColor: 'rgb(80, 80, 80)'
  },
  light: {
    type: 'light',
    background: 'rgb(240, 240, 240)',
    listBackground: 'rgb(240, 240, 240)',
    color: 'rgb(40, 40, 40)',
    hoverColor: 'rgb(220, 220, 220)',
    listHoverColor: 'rgb(220, 220, 220)',
    borderColor: 'rgb(150, 150, 150)'
  }
}

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {}
})

const ThemeContextWrapper = (props:any) => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (theme.type === themes.light.type) {
      setTheme(themes.dark)
    } else if (theme.type === themes.dark.type) {
      setTheme(themes.light)
    }
  }

  return (
    <ThemeContext.Provider value={{theme: theme, changeTheme: toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>

  )
}

export default ThemeContextWrapper