export type LoadingState<K extends string = 'loading'> = {
  [key in K]?: boolean
}
