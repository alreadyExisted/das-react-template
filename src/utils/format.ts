export const camelCase2Dash = (s: string) => s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
