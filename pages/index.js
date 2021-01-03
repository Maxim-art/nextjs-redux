// import { initializeStore } from '@/store'

export default function IndexSSR() {
  return (
    <div className="index_div">
      <div>Index</div>
    </div>
  )
}

// export function getServerSideProps() {
//   const reduxStore = initializeStore()
//   const { dispatch } = reduxStore

//   dispatch({
//     type: 'TICK',
//     light: false,
//     lastUpdate: Date.now(),
//   })

//   return { props: { initialReduxState: reduxStore.getState() } }
// }
