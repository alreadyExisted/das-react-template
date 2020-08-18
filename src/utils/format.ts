export const camelCaseToKebabCase = (s: string) => s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

export const kebabCaseToCamelCase = (s: string) => s.replace(/([-_]\w)/g, g => g[1].toUpperCase())

export const constantCaseToKebabCase = (s: string) =>
  s
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
