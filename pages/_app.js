import { Provider } from 'react-redux'
import { useStore } from '@/store'
import SiteLayout from '@/components/SiteLayout'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Provider>
  )
}
