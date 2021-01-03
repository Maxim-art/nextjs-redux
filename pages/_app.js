import { Provider } from 'react-redux'
import { useStore } from '@/store'
import LayoutMain from '@/components/layouts/LayoutMain'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </Provider>
  )
}
