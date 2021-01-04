import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useStore } from '@/store'
import LayoutMain from '@/components/layouts/LayoutMain'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <CssBaseline />
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </Provider>
  )
}
