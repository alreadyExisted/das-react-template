declare const config: {
  api: {
    main: string
    github: string
  }
}

declare const BUILD_ID: string
declare const IS_DEV: boolean

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
