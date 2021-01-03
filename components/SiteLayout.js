// import Link from 'next/link'
import Page from '@/components/page'

const SiteLayout = ({ children }) => (
  <div className="layout">
    <nav className="layout__nav">
      <Page />
      {/* <Link href="/">
            <a className="ml-8 font-medium text-gray-900">Home</a>
          </Link> */}
    </nav>
    <div className="layout__children">{children}</div>
  </div>
)

export default SiteLayout
