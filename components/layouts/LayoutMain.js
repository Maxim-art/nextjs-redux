// import Link from 'next/link'
// import Page from '@/components/page'

const SiteLayout = ({ children }) => (
  <div className="layout">
    {/* <nav className="layout__nav">
      <Page />
    </nav> */}
    <div className="layout__children">{children}</div>
  </div>
)

export default SiteLayout
