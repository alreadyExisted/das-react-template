export const mergeTheme = <T extends Record<string, string>>(base: T, theme: Partial<T> | undefined): T => {
  const newTheme = {} as Record<string, string | undefined>

  for (const key of Object.keys(base)) {
    newTheme[key] = base[key]
  }

  if (theme) {
    for (const key of Object.keys(theme)) {
      if (newTheme[key] != null) {
        newTheme[key] += ' ' + theme[key]
      } else {
        newTheme[key] = theme[key]
      }
    }
  }

  return newTheme as T
}
