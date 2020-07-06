import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import { Pages } from '@app/pages'
import { store } from '@app/state'
import { theme } from '@app/theme'

function AppComponent() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Pages />
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const App = IS_DEV ? require('react-hot-loader/root').hot(AppComponent) : AppComponent
